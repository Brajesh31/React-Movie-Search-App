import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";
import HeroBanner from "./components/HeroBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCatalogue from "./components/MovieCatalogue";

function App() {
  const [movieList, setMovieList] = useState([]);

  // function to add movie to movieList
  const addMovieList = (movie) => {
    let searchMovie = movieList.find((item) => item.imdbID == movie.imdbID);
    if (!searchMovie) {
      let tempMovieList = [...movieList];
      tempMovieList.push(movie);
      setMovieList(tempMovieList);

      localStorage.setItem("movieList", JSON.stringify(tempMovieList));
    }
  };

  // function to delete movie
  const deleteMovie = (id) => {
    let tempMovieList = movieList.filter((item) => item.imdbID != id);

    setMovieList(tempMovieList);
    localStorage.setItem("movieList", JSON.stringify(tempMovieList));
  };

  useEffect(() => {
    let tempMovieList = JSON.parse(localStorage.getItem("movieList"));

    setMovieList(tempMovieList ?? []);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroBanner addMovieList={addMovieList} />
        <MovieCatalogue movieList={movieList} deleteMovie={deleteMovie} />
      </div>
    </>
  );
}

export default App;
