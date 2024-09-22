"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Faq from "./components/faq/Faq";
import CardRow from "./components/card-row/CardRow";
import HeroSection from "./components/hero-section/HeroSection";

const initialUserState = {
  id: "",
  email: "",
  favouriteMovies: [],
};

export default function LandingPage() {
  const router = useRouter();
  const [user, setUser] = useState(initialUserState);
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("favouriteMovies");
    setUser(initialUserState);
  };

  useEffect(() => {
    // Custom movie api
    const getTrendingMovies = async function () {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=boys"
        );

        setTrendingMoviesList(data.map((ele) => ele.show));
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();

    const lsUserId = localStorage.getItem("userId");
    const lsUserEmail = localStorage.getItem("userEmail");
    const lsFavouriteMovies = localStorage.getItem("favouriteMovies");

    if (lsUserId && lsUserEmail) {
      setUser({
        id: lsUserId,
        email: lsUserEmail,
        favouriteMovies: lsFavouriteMovies.length > 0 ? lsFavouriteMovies : [],
      });
    }
  }, []);

  return (
    <div className=" mx-auto px-4">
      {/* Hero section  */}
      <HeroSection />

      {/* Trending Movies */}
      <section className="container mx-auto py-16">
        <CardRow cardRowTitle="Trending Now" cardsList={trendingMoviesList} />
      </section>

      {/* Features */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">More reasons to join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Enjoy on your TV",
              description:
                "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
              icon: "🖥️",
            },
            {
              title: "Download your shows to watch offline",
              description:
                "Save your favourites easily and always have something to watch.",
              icon: "⬇️",
            },
            {
              title: "Watch everywhere",
              description:
                "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
              icon: "📱",
            },
            {
              title: "Create profiles for kids",
              description:
                "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
              icon: "👶",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-16">
        <Faq />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto text-gray-500">
          <p className="mb-4">Questions? Call 000-800-040-1843</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Help Centre
            </a>
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Media Centre
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Speed Test
            </a>
            <a href="#" className="hover:underline">
              Legal Notices
            </a>
            <a href="#" className="hover:underline">
              Only on Netflix
            </a>
          </div>
          <select className="bg-transparent border rounded px-2 py-1 mt-8">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <p className="mt-4">Netflix India</p>
        </div>
      </footer>
    </div>
  );
}
