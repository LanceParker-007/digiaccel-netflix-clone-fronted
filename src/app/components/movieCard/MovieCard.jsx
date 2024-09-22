/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { PlaySquare, Star, StarFill } from "lucide-react"; // Import star icons
import React, { useEffect, useState } from "react";

const MovieCard = ({ ranking, movieInfo, showRanking = false }) => {
  // Track whether the movie is marked as favorite
  const [favorite, setFavorite] = useState(false);

  // useEffect(() => {}, [favorite]);
  // useEffect(() => {
  //   const lsFavouriteMovies = localStorage.getItem("favouriteMovies");
  //   let lsUpdatedFavouriteMovies = [];
  //   if (favorite) {
  //     lsUpdatedFavouriteMovies = lsFavouriteMovies.push({
  //       id: movieInfo?.id,
  //       name: movieInfo?.name,
  //       image: movieInfo?.image?.original || "",
  //     });
  //   } else {
  //     lsUpdatedFavouriteMovies = lsFavouriteMovies?.filter(
  //       (movieData) => movieData.id !== movieInfo.id
  //     );
  //   }
  //   console.log(lsUpdatedFavouriteMovies);

  //   localStorage.setItem("favouriteMovies", lsUpdatedFavouriteMovies);
  // }, [favorite]);

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
      <div
        onClick={(prev) => setFavorite(!prev)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        {favorite ? (
          <StarFill className="text-yellow-400 w-6 h-6" /> // Filled star for favorite
        ) : (
          <Star className="text-yellow-400 w-6 h-6" /> // Empty star for not favorite
        )}
      </div>
    </div>
  );
};

export default MovieCard;
