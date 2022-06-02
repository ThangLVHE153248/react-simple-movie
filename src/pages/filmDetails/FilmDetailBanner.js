import React from "react";

const FilmDetailBanner = ({ poster_path }) => {
  const path = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div>
      <div className="relative w-full h-[700px] mb-[300px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img
          src={path}
          alt="background-movie-detail"
          className="w-full h-full object-cover object-top"
        />
        <img
          src={path}
          alt="img-movie-details"
          className="absolute top-[450px] left-1/2 translate-x-[-50%] w-[900px] h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default FilmDetailBanner;
