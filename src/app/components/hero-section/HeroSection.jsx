import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <section
      className="relative bg-cover bg-center h-screen rounded"
      style={{
        backgroundImage: `url("/images/netflix-home-page-image.jpg")`, // Correct path and quotation mark
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 lg:w-1/2 sm:w-full base:w-full mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-3/5 bg-black bg-opacity-50 border-2 border-green-500 text-white placeholder-gray-400 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full sm:w-2/5 bg-red-600 hover:bg-red-700 text-white text-xl py-3 px-6 rounded flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/signin?email=${encodeURIComponent(email)}`);
            }}
          >
            Get Started <ChevronRight className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
