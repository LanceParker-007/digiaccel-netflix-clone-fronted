"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Faq from "./components/faq/Faq";
import CardRow from "./components/card-row/CardRow";
import HeroSection from "./components/hero-section/HeroSection";
import toast from "react-hot-toast";

export default function LandingPage() {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  useEffect(() => {
    // Custom movie api
    const getTrendingMovies = async function () {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=boys"
        );

        setTrendingMoviesList(data.map((ele) => ele.show));
      } catch (error) {
        toast.error("Failed to fetch trending movies!");
        console.log(error);
      }
    };
    getTrendingMovies();
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
    </div>
  );
}
