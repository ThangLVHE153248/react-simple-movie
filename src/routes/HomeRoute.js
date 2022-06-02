import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const HomeRoute = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default HomeRoute;
