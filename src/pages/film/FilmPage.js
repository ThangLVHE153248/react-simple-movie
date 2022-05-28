import React from "react";
import HomeBanner from "../../components/banner/HomeBanner";
import FilmList from "../../components/film/FilmList";

const FilmPage = ({ tabs, type }) => {
  return (
    <div className="page-container">
      <HomeBanner></HomeBanner>
      {tabs.map((tab, index) => (
        <FilmList
          key={index}
          title={tab.title}
          path={tab.path}
          type={type}
        ></FilmList>
      ))}
    </div>
  );
};

export default FilmPage;
