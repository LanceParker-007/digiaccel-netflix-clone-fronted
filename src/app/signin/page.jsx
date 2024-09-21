import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
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
          Dont have an account?{" "}
          <Link href="/signup" className="text-red-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-gray-400 mt-4">
          Go to?{" "}
          <Link href="/" className="text-red-600 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
