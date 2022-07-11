import React from "react";
import { useParams } from "react-router-dom";
import FilmList from "../../components/film/FilmList";

const SearchPage = () => {
  const params = useParams();

  return (
    <div className="page-container">
      <div className="text-3xl text-white font-semibold mt-10">
        Search results
      </div>
      <FilmList
        title="Movies"
        type="search"
        path="movie"
        query={`query=${params.query}`}
        isSearch={true}
      ></FilmList>
      <FilmList
        title="Series"
        type="search"
        path="tv"
        query={`query=${params.query}`}
        isSearch={true}
      ></FilmList>
    </div>
  );
};

export default SearchPage;
