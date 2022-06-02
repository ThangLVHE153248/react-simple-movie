import React from "react";
import { imgPath } from "../../config";

const CastList = ({ cast }) => {
  return (
    <div className="flex">
      {cast.slice(0, 4).map((actor, index) => (
        <div key={index} className="w-1/4 px-3 text-center">
          <img
            src={`${imgPath}/${actor.profile_path}`}
            alt={actor.name ?? ""}
            className="h-full object-cover"
          />
          <div>{actor.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CastList;
