import React from "react";

const tabList = [
  {
    name: "TV Series",
    path: "/series",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "Anime",
    path: "/anime",
  },
];

const Header = () => {
  return (
    <div className="flex container text-gray-400 py-7">
      {tabList.map((tab, index) => (
        <div key={index} className="mr-10 text-base font-medium">
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Header;
