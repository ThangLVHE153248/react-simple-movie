import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import FilmCard from "./FilmCard";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import useSWR from "swr";
import { fetcher, apiKey } from "../../config";

const FilmList = ({ title, path, type, query, isSearch }) => {
  const [movies, setMovies] = useState([]);
  const apiQuery = query ? `api_key=${apiKey}&${query}` : `api_key=${apiKey}`;
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${type}/${path}?${apiQuery}
      `,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="mt-10">
      <div className="mb-5 text-white text-2xl font-bold capitalize text-left">
        {title}
      </div>
      <div className="movie_list">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={25}
          slidesPerView={"auto"}
        >
          {movies.map((film, index) => (
            <SwiperSlide key={index}>
              <FilmCard film={film} key={index} type={isSearch ? path : type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FilmList;
