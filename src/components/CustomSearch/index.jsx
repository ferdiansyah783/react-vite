import React from "react";
import searchIcon from "../../assets/images/Search_alt.svg";
import clsx from "clsx";

const CustomSearch = ({ setQuery, width }) => {
  return (
    <section className={clsx("flex items-center space-x-2 bg-white drop-shadow py-2 lg:py-1 2xl:py-[9px] px-4 rounded-lg", width)}>
      <span className="text-xl text-indigo-500">
        <img src={searchIcon} alt="search icon" className="w-7 h-7" />
      </span>
      <input
        className="w-full outline-none lg:placeholder:text-sm"
        type="search"
        name="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e)}
      />
    </section>
  );
};

export default CustomSearch;
