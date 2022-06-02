import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WatchButton from "../WatchButton";

const HomeBanner = ({ film, id, type }) => {
  const { poster_path, title, name, overview } = film;
  const filmName = title || name;
  const path = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link
      to={`/${type}/${id}`}
      className="banner block relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={path}
        alt="home_banner"
        className="relative w-full h-full object-cover"
      />
      <div className="absolute top-[50%] left-20 text-white drop-shadow-md">
        <div className="text-3xl font-bold mb-5">{filmName}</div>
        <div className="banner_overview w-[600px] h-[80px] mb-5">
          {overview}
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-[140px]">
            <WatchButton title="Watch"></WatchButton>
          </div>
          {/* <div className="w-11 h-11 flex items-center justify-center bg-gray-600 hover:bg-gray-700 opacity-90 cursor-pointer rounded-xl">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default HomeBanner;
