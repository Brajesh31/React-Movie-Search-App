import React, { useEffect, useRef } from "react";
import axios from "axios";

const apikey = import.meta.env.VITE_API_KEY;

const MovieSearch = ({ setMovieObj, setIsSearching, setIsLoading }) => {
  const searchRef = useRef(null);

  const searchMovie = async (s) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${s}&apikey=${apikey}`
    );
    console.log(response.data);
    setIsLoading(false);

    if (response.data) {
      let tempObj = {
        title: response.data.Title,
        rating: response.data.imdbRating,
        summary: response.data.Plot,
        image: response.data.Poster,
        released: response.data.Released,
        genre: response.data.Genre,
        imdbID: response.data.imdbID,
      };

      setMovieObj(tempObj);
    }
  };

  const handleOnSearch = async () => {
    let search = searchRef.current.value;
    if (search && search != "") {
      setIsSearching(false);
      searchMovie(search);
    }
  };

  const handleOnKeyUp = (event) => {
    if (event.key === "Enter") {
      handleOnSearch();
    }
  };

  useEffect(() => {
    searchMovie("Deadpool");
  }, []);

  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="search-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="search movie by name..."
            aria-label="Movie search input"
            aria-describedby="button-search"
            ref={searchRef}
            onFocus={() => {
              setIsSearching(true);
            }}
            onKeyUp={handleOnKeyUp}
          />
          <button
            className="btn btn-danger"
            type="button"
            id="button-search"
            onClick={handleOnSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
