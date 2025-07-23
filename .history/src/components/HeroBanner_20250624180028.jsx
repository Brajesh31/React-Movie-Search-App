import React, { useState } from "react";
import MovieSearch from "./MovieSearch";
import MovieCard from "./MovieCard";

const HeroBanner = ({}) => {
  const [movieObj, setMovieObj] = useState    ({
    title: "Batman",
    image:
      "https://resizing.flixster.com/_l-45JwnilFKXGmWYRVA6N1EA2M=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12932_p_v8_aj.jpg",
    rating: 10,
    summary: "Batman Summary",
  });

  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: "url('./src/assets/images/hero-banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <MovieSearch setMovieObj={setMovieObj} />
          <MovieCard {...movie} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
