import React from "react";

const FilmTrailer = ({ trailer }) => {
  return (
    <div className="mb-7 text-left">
      <div className="text-2xl mb-3 font-medium">{trailer.name}</div>
      <iframe
        width="900"
        height="506"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FilmTrailer;
