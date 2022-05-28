import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import FilmCard from "./FilmCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";

const FilmList = ({ title, path, type }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${type}/${path}?api_key=e49214104ec039404da9d772ac302caf
    `,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="mt-7">
      <div className="mb-4 text-white text-xl font-bold capitalize">
        {title}
      </div>
      <div className="movie_list">
        <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
          {movies.map((film, index) => (
            <SwiperSlide key={index}>
              <FilmCard film={film} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FilmList;
