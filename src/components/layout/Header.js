import React from "react";
import { NavLink } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tabList = [
  {
    name: "TV Series",
    path: "/series",
  },
  {
    name: "Movies",
    path: "/movies",
  },
];

const Header = () => {
  return (
    <div className="flex container text-gray-400 py-7 font-medium gap-x-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary nav_item-active" : "text-white"
        }
      >
        <FontAwesomeIcon icon={faHouse} />
      </NavLink>
      {tabList.map((tab, index) => (
        <NavLink
          to={tab.path}
          key={index}
          className={({ isActive }) =>
            isActive ? "text-primary nav_item-active" : ""
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
