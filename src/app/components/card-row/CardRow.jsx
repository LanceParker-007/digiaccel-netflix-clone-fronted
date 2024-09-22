"use client";
import React, { useRef } from "react";
import MovieCard from "../movieCard/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardRow = ({
  cardRowTitle = "Trending Now",
  cardsList = [],
  showRanking = false,
}) => {
  const trendingRef = useRef(null);
  const scroll = (scrollOffset) => {
    if (trendingRef.current) {
      trendingRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 px-3">{cardRowTitle}</h2>
      <div className="relative px-3">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 h-24"
          onClick={() => scroll(-500)}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <div
          ref={trendingRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {cardsList?.map((movie, index) => (
            <MovieCard
              key={movie.id}
              ranking={index + 1}
              movieInfo={movie}
              showRanking={showRanking}
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 h-24"
          onClick={() => scroll(500)}
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </>
  );
};

export default CardRow;
