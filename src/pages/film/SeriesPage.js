import React from "react";
import FilmPage from "./FilmPage";

const type = "tv";

const seriesTabs = [
  {
    title: "On The Air",
    path: "on_the_air",
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
  return <FilmPage tabs={seriesTabs} type={type}></FilmPage>;
};

export default MoviePage;
