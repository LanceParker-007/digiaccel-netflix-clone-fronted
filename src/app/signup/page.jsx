"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/register`,
        {
          email,
          password,
        }
      );

      if (data.success) {
        setEmail("");
        setPassword("");
        toast.success("Registration successful!");
        localStorage.setItem("userId", data._id);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem(
          "favouriteMovies",
          JSON.stringify(data.favouriteMovies)
        );
        Cookies.set("access_token", data.token, { expires: 30 });
        router.push("/home");
      } else {
        throw Error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-red-600 hover:underline">
            Sign In
          </Link>
        </p>
        <p className="text-gray-400 mt-4">
          Go?{" "}
          <Link href="/" className="text-red-600 hover:underline">
            Back
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
