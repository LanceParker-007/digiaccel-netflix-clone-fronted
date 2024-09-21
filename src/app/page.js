"use client";

import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./components/vnow/MovieCard";
import { ChevronRight, ChevronDown, ChevronLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
];

export default function Home() {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const trendingRef = useRef(null);
  const router = useRouter();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scroll = (scrollOffset) => {
    if (trendingRef.current) {
      trendingRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Custom movie api
    const getTrendingMovies = async function () {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWI4OTVjZWVkM2YzY2E5Mjc4ZDQ3YWIyMWNhZTEwMSIsIm5iZiI6MTcyNjg4NjgwNS4yMTcxNjQsInN1YiI6IjY0NGUxMWUzYTZjMTA0MDRhMjY3NWI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8U-xGOywYf6Li-Tu2YTHK8Ekv1-kSufcHplLuAYQjug",
          },
        };

        const { data } = await axios.get(url, options);
        console.log(data);

        setTrendingMoviesList(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="max-w-screen-xl max-w-container mx-auto flex items-center justify-between p-4">
        <svg
          viewBox="0 0 111 30"
          className="h-12 w-36 fill-current text-red-600"
          aria-hidden="true"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border rounded px-2 py-1">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </button>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Hero section  */}

        <section
          className="relative bg-cover bg-center h-screen"
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
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2 lg:w-1/2 sm:w-full base:w-full mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-3/5 bg-black bg-opacity-50 border-2 border-green-500 text-white placeholder-gray-400 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button className="w-full sm:w-2/5 bg-red-600 hover:bg-red-700 text-white text-xl py-3 px-6 rounded flex items-center justify-center">
                Get Started <ChevronRight className="ml-2" />
              </button>
            </form>
          </div>
        </section>

        {/* Trending Movies */}
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 h-24"
              onClick={() => scroll(-1000)}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <div
              ref={trendingRef}
              className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {trendingMoviesList?.map((movie, index) => (
                <MovieCard
                  key={movie.id}
                  ranking={index + 1}
                  movieInfo={movie}
                />
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 h-24"
              onClick={() => scroll(1000)}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
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
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700">
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-800 hover:bg-gray-700"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronDown className="h-6 w-6" />
                  ) : (
                    <Plus className="h-6 w-6" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-900">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
    </div>
  );
}
