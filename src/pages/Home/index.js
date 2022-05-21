import React from "react";
import HomeBanner from "../../components/banner/HomeBanner";
import MovieList from "../../components/movie/MovieList";

const Home = () => {
  return (
    <div className="container">
      <HomeBanner></HomeBanner>
      <MovieList></MovieList>
    </div>
  );
};

export default Home;
