import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WatchButton from "../WatchButton";

const FilmCard = ({ film }) => {
  const {
    poster_path,
    vote_average,
    title,
    release_date,
    name,
    first_air_date,
  } = film;
  const filmName = title || name;
  const filmDate = release_date || first_air_date;
  const path = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="relative w-[215px] h-[360px] rounded-xl text-white overflow-hidden flex flex-col">
      <img
        src={path}
        alt="movie_card"
        className="w-full h-full object-cover blur-xl brightness-75 contrast-60"
      />
      <div className="absolute top-0 left-0 w-full min-h-full p-3 flex flex-col select-none">
        <img
          src={path}
          alt={title}
          className="w-full h-[190px] rounded-xl object-cover"
        />
        <div className="flex flex-col flex-1">
          <div className="font-medium text-sm mt-3">{filmName}</div>
          <div className="flex justify-between text-xs mt-3">
            <div>{new Date(filmDate).getFullYear()}</div>
            <div>
              <span className="inline-block mr-2">{vote_average}</span>
              <div className="inline-block">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <WatchButton title="Watch now"></WatchButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
