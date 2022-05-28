import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WatchButton from "../WatchButton";

const HomeBanner = () => {
  const hotFilms = {
    name: "Avengers: Endgame",
    image:
      "https://images.unsplash.com/photo-1497015289639-54688650d173?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332",
    genres: ["Action", "Adventure", "Drama"],
  };

  return (
    <div className="page-container relative h-[370px] rounded-2xl overflow-hidden cursor-pointer">
      <img
        src={hotFilms.image}
        alt="home_banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 translate-y-[-20px] left-5 text-white">
        <div className="text-3xl font-bold mb-5">{hotFilms.name}</div>
        <div className="flex items-center gap-x-3 mb-6">
          {hotFilms.genres.map((genre, index) => (
            <div
              key={index}
              className="px-3 py-2 border border-white rounded-md cursor-pointer capitalize"
            >
              {genre}
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-[140px]">
            <WatchButton title="Watch"></WatchButton>
          </div>
          <div className="w-11 h-11 flex items-center justify-center bg-gray-600 hover:bg-gray-700 opacity-90 cursor-pointer rounded-xl">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
