/* eslint-disable @next/next/no-img-element */
"use client";

import { PlaySquare } from "lucide-react";
import React from "react";

const MovieCard = ({ ranking, movieInfo }) => {
  return (
    <div className="flex-none w-48 relative group">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={movieInfo.original_title}
        className="rounded-md w-48 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-md">
        TOP {ranking}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
        <p className="text-sm font-bold">{movieInfo.original_title}</p>
        <p className="text-xs">Recently added</p>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <button className="bg-white text-black font-bold hover:bg-opacity-75 px-4 py-2 rounded flex items-center">
          Play
          <PlaySquare className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
