import React, { useState } from "react";
import MovieSearch from "./MovieSearch";
import MovieCard from "./MovieCard";

const HeroBanner = ({ addMovieList }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movieObj, setMovieObj] = useState({
    imdbID: "",
    title: "",
    image: "",
    rating: 0,
    summary: "",
    released: "",
    genre: "",
  });

  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${movieObj.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <MovieSearch
            setMovieObj={setMovieObj}
            setIsLoading={setIsLoading}
            setIsSearching={setIsSearching}
          />
          {isLoading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className={isSearching ? "hidden" : ""}>
              <MovieCard {...movieObj} addMovieList={addMovieList} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
