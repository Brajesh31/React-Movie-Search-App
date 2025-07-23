import React, { useState } from "react";

const MovieFilter = ({ setDisplayMovieList }) => {
  const [filterValue, setFilterValue] = useState("all");

  const handleOnFilter = (filter) => {
    let tempList = movieList.filter(
      (item) => item.type == filter || filter == "all"
    );

    setDisplayMovieList(tempList);
    setFilterValue(filter);
  };

  return (
    <div>
      <button
        className={
          filterValue === "all"
            ? "btn btn-primary mx-2"
            : "btn btn-dark-subtle mx-2"
        }
        onClick={() => {
          handleOnFilter("all");
        }}
      >
        ALL
      </button>
      <button
        className={
          filterValue === "action"
            ? "btn btn-primary mx-2"
            : "btn btn-dark-subtle mx-2"
        }
        onClick={() => {
          handleOnFilter("action");
        }}
      >
        Action
      </button>
      <button
        className={
          filterValue === "drama"
            ? "btn btn-primary mx-2"
            : "btn btn-dark-subtle mx-2"
        }
        onClick={() => {
          handleOnFilter("drama");
        }}
      >
        Drama
      </button>
    </div>
  );
};

export default MovieFilter;
