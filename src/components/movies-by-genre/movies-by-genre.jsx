import React from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types.js";
import Footer from "../footer/footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";


const MoviesByGenre = (props) => {
  const {movies, onMovieSelect} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList
          movies = {movies}
          onMovieSelect = {onMovieSelect}
        />
      </section>

      <Footer />
    </div>
  );
};


MoviesByGenre.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesByGenre;
