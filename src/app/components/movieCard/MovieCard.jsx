/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { PlaySquare, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Cookies.get("access_token")}`,
  },
};

const MovieCard = ({ ranking, movieInfo, showRanking = false }) => {
  // Track whether the movie is marked as favorite
  const [firstRender, setFirstRender] = useState(true);
  const [favorite, setFavorite] = useState(
    console.log(
      JSON.parse(localStorage.getItem("favouriteMovies"))?.some((movie) => {
        console.log(movie.id, movieInfo.id);
        return movie.id === movieInfo.id;
      })
    )
  );

  const addMovieToFav = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/add-to-favourite`,
        {
          id: movieInfo?.id,
          name: movieInfo?.name,
          image: movieInfo?.image?.original || "",
        },
        options
      );

      if (data.success) {
        toast.success("Added to favourites!");
        localStorage.setItem(
          "favouriteMovies",
          JSON.stringify(data.favouriteMovies)
        );
      } else {
        throw Error(data.message);
      }
    } catch (error) {
      toast.error("Failed adding to favourties!");
    }
  };

  const removeFromFav = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/remove-from-favourite`,
        {
          id: movieInfo?.id,
        },
        options
      );

      if (data.success) {
        toast.success("Removed from favourites!");
        localStorage.setItem(
          "favouriteMovies",
          JSON.stringify(data.favouriteMovies)
        );
      } else {
        throw Error(data.message);
      }
    } catch (error) {
      toast.error("Failed removing from favourites!");
    }
  };

  useEffect(() => {
    if (!firstRender) {
      if (favorite) {
        addMovieToFav();
      } else {
        removeFromFav();
      }
    } else {
      setFirstRender(false);
    }
  }, [favorite]);

  return (
    <div className="flex-none w-48 relative group overflow-hidden">
      <img
        src={movieInfo?.image?.original || movieInfo?.image}
        alt={movieInfo.name}
        className="rounded-md w-48 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {showRanking && (
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-md">
          TOP {ranking}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
        <p className="text-sm font-bold">{movieInfo.name}</p>
        <p className="text-xs">Recently added</p>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <button className="bg-white text-black font-bold hover:bg-opacity-75 px-4 py-2 rounded flex items-center">
          Play
          <PlaySquare className="ml-2" />
        </button>
      </div>

      {/* Star Icon for marking as favorite */}
      {Cookies.get("access_token") && (
        <div
          onClick={() => setFavorite(!favorite)}
          className="absolute top-2 right-2 cursor-pointer"
          title="Toggle Favourite"
        >
          {favorite ? (
            <Star fill="yellow" className="text-yellow-400 w-6 h-6" /> // Filled star
          ) : (
            <Star className="text-white w-6 h-6" /> // Empty star
          )}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
