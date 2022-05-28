import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
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
    <div className="page-container">
      <HomeBanner></HomeBanner>
      {filmTabs.map((tab, index) => (
        <FilmList
          key={index}
          title={tab.title}
          path={tab.path}
          type={tab.type}
        ></FilmList>
      ))}
    </div>
  );
};

export default HomePage;
