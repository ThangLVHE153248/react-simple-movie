import React from "react";

const FilmGenres = ({ genres }) => {
  return (
    <div className="flex gap-7 justify-center items-center">
      {genres.map((genres, index) => (
        <div
          key={index}
          className="py-2 px-5 border-[1px] border-solid border-primary bg-slate-900 rounded-3xl text-primary"
        >
          {genres.name}
        </div>
      ))}
    </div>
  );
};

export default FilmGenres;
