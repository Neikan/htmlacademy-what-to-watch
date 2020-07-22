import React from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types.js";
import Footer from "../footer/footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import withSelectedMovie from "../../hoc/with-selected-movie/with-selected-movie.js";


const MoviesListWrapped = withSelectedMovie(MoviesList);


const MoviesByGenre = (props) => {
  const {movies, countShowedMovies, onMovieSelect} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesListWrapped
          movies = {movies}
          countShowedMovies={countShowedMovies}
          onMovieSelect = {onMovieSelect}
        />
      </section>

      <Footer />
    </div>
  );
};


MoviesByGenre.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesByGenre;
