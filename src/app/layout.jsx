"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import UserContext from "./contexts/userContext"; // Import your UserContext

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const initialUserState = {
  id: "",
  email: "",
  favouriteMovies: [],
};

export default function RootLayout({ children }) {
  // Initialize user and setUser
  const [user, setUser] = useState(initialUserState);
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("access_token")) {
      const lsUserId = localStorage.getItem("userId");
      const lsUserEmail = localStorage.getItem("userEmail");
      const lsFavouriteMovies = localStorage.getItem("favouriteMovies");
      setUser({
        id: lsUserId,
        email: lsUserEmail,
        favouriteMovies: lsFavouriteMovies ? JSON.parse(lsFavouriteMovies) : [],
      });
      router.push("/home");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen bg-black text-white max-w-screen-xl mx-auto">
          {/* Provide user and setUser to the context */}
          <UserContext.Provider value={{ user, setUser }}>
            <Header initialUserState={initialUserState} />
            {children} {/* children will now have access to the context */}
            <Footer />
          </UserContext.Provider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
