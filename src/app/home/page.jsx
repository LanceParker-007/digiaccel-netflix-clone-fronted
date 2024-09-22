"use client";

import Cookies from "js-cookie";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import CardRow from "../components/card-row/CardRow";
import axios from "axios";
import UserContext from "../contexts/UserContext";

const fetchRelatedMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=girls"
    );

    return data.map((ele) => ele.show);
  } catch (error) {
    return [];
  }
};

const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=marvel"
    );

    return data.map((ele) => ele.show);
  } catch (error) {
    return [];
  }
};

const fetchUpcomingMovies = async () => {
  try {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=japan"
    );

    return data.map((ele) => ele.show);
  } catch (error) {
    return [];
  }
};

const Home = () => {
  const router = useRouter();
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const fillLists = async () => {
    // Await each of the fetch functions
    const relatedMoviesData = await fetchRelatedMovies();
    const trendingMoviesData = await fetchTrendingMovies();
    const upcomingMoviesData = await fetchUpcomingMovies();

    // Set the state after the data is fetched
    setRelatedMovies(relatedMoviesData);
    setTrendingMovies(trendingMoviesData);
    setUpcomingMovies(upcomingMoviesData);
  };

  useEffect(() => {
    if (!Cookies.get("access_token")) {
      router.push("/");
      return;
    } else {
      if (Cookies.get("access_token")) {
        const lsUserId = localStorage.getItem("userId");
        const lsUserEmail = localStorage.getItem("userEmail");
        const lsFavouriteMovies = localStorage.getItem("favouriteMovies");
        setUser({
          id: lsUserId,
          email: lsUserEmail,
          favouriteMovies: lsFavouriteMovies
            ? JSON.parse(lsFavouriteMovies)
            : [],
        });
      }
      fillLists();
    }
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen rounded"
        style={{
          backgroundImage: `url("/images/netflix-home-page-image.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome Back!</h1>

          <p className="mb-3">Ready to watch!</p>

          <button
            className="w-full sm:w-2/5 bg-green-600 hover:bg-green-700 text-white text-xl py-3 px-6 rounded flex items-center justify-center"
            onClick={() => router.push(`/favourite-movies`)}
          >
            Go to favourites <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
      <div className="min-h-screen bg-black text-white">
        {relatedMovies?.length > 0 && (
          <section className="container mx-auto py-16">
            <CardRow
              cardRowTitle="You may also like"
              cardsList={relatedMovies}
            />
          </section>
        )}

        {trendingMovies?.length > 0 && (
          <section className="container mx-auto py-16">
            <CardRow
              cardRowTitle="Trending Now"
              cardsList={trendingMovies}
              showRanking={true}
            />
          </section>
        )}

        {upcomingMovies?.length > 0 && (
          <section className="container mx-auto py-16">
            <CardRow
              cardRowTitle="Upcoming Movies"
              cardsList={upcomingMovies}
            />
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
