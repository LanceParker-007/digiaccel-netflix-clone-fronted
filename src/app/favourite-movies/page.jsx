/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardRow from "../components/card-row/CardRow";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const fetchFavouriteMovies = async () => {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/user/get-favourite-movies",
      options
    );

    if (data.success) {
      return data.favouriteMovies;
    } else {
      throw Error(data.message);
    }
  } catch (error) {
    toast.error(error?.message);
  }
};

const FavouriteMovies = () => {
  const router = useRouter();
  // favourite movies
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const fillLists = async () => {
    const favouriteMoviesData = await fetchFavouriteMovies();

    // Set the state after the data is fetched
    setFavouriteMovies(favouriteMoviesData);
  };

  useEffect(() => {
    if (!Cookies.get("access_token")) {
      router.push("/");
      return;
    } else {
      fillLists();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {favouriteMovies?.length > 0 && (
        <section className="container mx-auto py-16">
          <CardRow
            cardRowTitle="Favourite Movies"
            cardsList={favouriteMovies}
            showRanking={true}
          />
        </section>
      )}
    </div>
  );
};

export default FavouriteMovies;
