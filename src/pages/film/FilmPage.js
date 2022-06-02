import React from "react";
import BannerList from "../../components/banner/BannerList";
import FilmList from "../../components/film/FilmList";

const FilmPage = ({ tabs, type }) => {
  return (
    <div>
      <BannerList type={type}></BannerList>
      <div className="page-container">
        {tabs.map((tab, index) => (
          <FilmList
            key={index}
            title={tab.title}
            path={tab.path}
            type={type}
          ></FilmList>
        ))}
      </div>
    </div>
  );
};

export default FilmPage;
