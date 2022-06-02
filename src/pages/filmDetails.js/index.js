import React from "react";
import { useParams } from "react-router-dom";
import CastList from "../../components/cast/CastList";
import FilmGenres from "../../components/film/FilmGenres";
import FilmList from "../../components/film/FilmList";
import { apiKey } from "../../config";
import { useGetAxios } from "../../hooks/useGetAxios";
import FilmDetailBanner from "./FilmDetailBanner";
import FilmDetailTrailers from "./FilmDetailTrailers";

const FilmDetails = () => {
  const pathName = window.location.pathname;
  const { filmId } = useParams();
  const type = pathName.split("/")[1];

  const { data: filmDetail } = useGetAxios(
    `https://api.themoviedb.org/3/${type}/${filmId}?api_key=${apiKey}`
  );
  const { data: credits } = useGetAxios(
    `https://api.themoviedb.org/3/${type}/${filmId}/credits?api_key=${apiKey}`
  );
  const { poster_path, title, name, genres, overview } = filmDetail;
  const { cast } = credits;
  const filmName = title || name;

  return (
    <div>
      <FilmDetailBanner poster_path={poster_path}></FilmDetailBanner>
      <div className="w-[900px] mx-auto text-center text-white">
        <div className="title-h1 mb-8">{filmName}</div>
        <div className="mb-10">
          <FilmGenres genres={genres ?? []} />
        </div>
        <div className="mb-10">{overview}</div>
        <div className="mb-16">
          <div className="text-3xl font-medium mb-5">Casts</div>
          <CastList cast={cast ?? []}></CastList>
        </div>
        <FilmDetailTrailers type={type} filmId={filmId}></FilmDetailTrailers>
        <div className="mb-16">
          <FilmList
            title="Similar movies"
            path={`${filmId}/similar`}
            type={type}
          ></FilmList>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
