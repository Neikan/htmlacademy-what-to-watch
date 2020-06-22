import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {movieType} from "../../props/prop-types";


const MoviesList = (props) => {
  const {movies, onMovieSelect} = props;

  return (
    <>
      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <MovieCard
            key = {movie.id}
            title = {movie.title}
            poster = {movie.poster}
            onMovieSelect={onMovieSelect}
          />)
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesList;
