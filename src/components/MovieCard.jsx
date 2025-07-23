import React from "react";

const MovieCard = ({
  imdbID,
  title,
  image,
  rating,
  summary,
  released,
  genre,
  type,
  addMovieList,
  deleteMovie,
}) => {
  const handleOnClick = (type) => {
    let tempMovie = {
      imdbID,
      title,
      image,
      rating,
      summary,
      released,
      genre,
      type,
    };

    addMovieList(tempMovie);
  };
  return (
    <div className="movie-card d-flex justify-content-center align-items-center text-white rounded-3 mx-auto overflow-hidden gap-4">
      <div className="movie-image">
        <img src={image != "" && image ? image : { image }} alt={title} />
      </div>
      <div className="movie-content p-3">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-rating mb-2 fw-bold">IMDB Rating: {rating}</div>
        <div className="movie-released mb-2">Released: {released}</div>
        <div className="movie-desc mb-2">{summary}</div>
        {type ? (
          <>
            <div className="movie-type">
              <div className="bg-info text-white rounded-3 text-capitalize mb-2">
                Genre: {genre}
              </div>
              <button
                className="btn btn-danger"
                type="button"
                id="button-delete"
                onClick={() => {
                  deleteMovie(imdbID);
                }}
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex gap-3 mb-3">
              <button
                className="btn btn-warning"
                type="button"
                id="button-action"
                onClick={() => {
                  handleOnClick("action");
                }}
              >
                Action
              </button>
              <button
                className="btn btn-primary"
                type="button"
                id="button-drama"
                onClick={() => {
                  handleOnClick("drama");
                }}
              >
                Drama
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
