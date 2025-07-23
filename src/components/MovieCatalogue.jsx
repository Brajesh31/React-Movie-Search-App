import React, { useEffect, useState } from "react";
import MovieFilter from "./MovieFilter";
import MovieCard from "./MovieCard";

const MovieCatalogue = ({ movieList, deleteMovie }) => {
  //   const [movieList, setMovieList] = useState([]);
  const [displayMovieList, setDisplayMovieList] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const handleOnFilter = (filter) => {
    // function to filter movie in catalogue
    let tempList = movieList.filter(
      (item) => item.type == filter || filter == "all"
    );

    setDisplayMovieList(tempList);
    setFilterValue(filter);
  };

  useEffect(() => {
    setDisplayMovieList(movieList);
  }, [movieList]);

  return (
    <>
      <section className="movie-filter text-center py-4">
        <div className="container">
          <div className="pb-4">
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
          <div className="movie-filtered">
            <div className="row">
              {displayMovieList.map((movie, index) => (
                <div
                  className="movie-filtered-cards col-12 col-md-6 mb-4"
                  key={index}
                >
                  <MovieCard {...movie} deleteMovie={deleteMovie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCatalogue;
