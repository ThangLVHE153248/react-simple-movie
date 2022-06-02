import React from "react";
import FilmTrailer from "../../components/film/FilmTrailer";
import { apiKey } from "../../config";
import { useGetAxios } from "../../hooks/useGetAxios";

const FilmDetailTrailers = ({ type, filmId }) => {
  const { data } = useGetAxios(
    `https://api.themoviedb.org/3/${type}/${filmId}/videos?api_key=${apiKey}`
  );
  const trailers = data?.results?.slice(0, 2);
  return (
    <>
      {trailers?.length > 0 && (
        <>
          <div className="text-3xl font-medium mb-5 text-left">
            Related Videos
          </div>
          <div>
            {trailers?.slice(0, 2).map((trailer, index) => (
              <FilmTrailer key={index} trailer={trailer}></FilmTrailer>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FilmDetailTrailers;
