import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, apiKey } from "../../config";
import HomeBanner from "./HomeBanner";

const BannerList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}
    `,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
      {movies?.map((film, index) => (
        <SwiperSlide key={index}>
          <HomeBanner film={film} key={index} id={film.id} type={type} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerList;
