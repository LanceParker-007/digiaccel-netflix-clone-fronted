/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Signin = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/user/login`,
        {
          email: user.email,
          password: user.password,
        }
      );

      console.log(data);

      if (data.success) {
        setUser({ email: "", password: "" });
        toast.success("Login successful!");
        localStorage.setItem("userId", data._id);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("favouriteMovies", data.favouriteMovies);
        Cookies.set("access_token", data.token, { expires: 30 });
        router.push("/home");
      } else {
        throw Error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const emailFromQuery = params.get("email");

    if (emailFromQuery) {
      setUser({
        ...user,
        email: JSON.parse(JSON.stringify(emailFromQuery)),
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email"
              onChange={onChangeUser}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
              onChange={onChangeUser}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          {"Don't have an account?"}
          <Link href="/signup" className="text-red-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-gray-400 mt-4">
          Go?{" "}
          <Link href="/" className="text-red-600 hover:underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
