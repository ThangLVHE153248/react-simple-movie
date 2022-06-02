import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MultiSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleClickSearch = (e) => {
    e.preventDefault();
    navigate(`search/${searchQuery}`);
  };
  const handleChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Type here to search"
        className="bg-slate-800 text-white outline-none pl-4 w-[300px]"
        onChange={handleChangeSearch}
      />
      <button
        type="submit"
        className="bg-primary px-3"
        onClick={handleClickSearch}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
      </button>
    </div>
  );
};

export default MultiSearch;
