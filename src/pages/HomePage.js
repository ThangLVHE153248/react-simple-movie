import React from "react";
import BannerList from "../components/banner/BannerList";
import FilmList from "../components/film/FilmList";

const filmTabs = [
  {
    title: "Hot Movies",
    path: "popular",
    type: "movie",
  },
  {
    title: "Hot TV Series",
    path: "popular",
    type: "tv",
  },
];

const HomePage = () => {
  return (
    <div>
      <BannerList type="movie"></BannerList>
      <div className="page-container">
        {filmTabs.map((tab, index) => (
          <FilmList
            key={index}
            title={tab.title}
            path={tab.path}
            type={tab.type}
          ></FilmList>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
