import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WatchButton = ({ title }) => {
  return (
    <div className="flex w-full h-11 gap-2 items-center justify-center rounded-lg bg-primary hover:bg-pink-600 cursor-pointer">
      <span>{title}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
        <FontAwesomeIcon icon={faPlay} className="text-primary text-xs" />
      </div>
    </div>
  );
};

export default WatchButton;
