import React from "react";
import FilmPage from "./FilmPage";

const type = "movie";

const movieTabs = [
  {
    title: "Now Playing",
    path: "now_playing",
  },
  {
    title: "Top Rated",
    path: "top_rated",
  },
  {
    title: "Popular",
    path: "popular",
  },
];

const MoviePage = () => {
  return <FilmPage tabs={movieTabs} type={type}></FilmPage>;
};

export default MoviePage;
