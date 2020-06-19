import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {movieType, genreType, promoType} from "../../props/prop-types.js";


const handleMoviePlay = () => {};
const handleMovieAddToList = () => {};
const handleMovieSelect = () => {};
const handleGenreSelect = () => {};


const App = (props) => {
  const {promo, movies, genres} = props;

  return <Main
    promo = {promo}
    movies = {movies}
    genres = {genres}
    onMoviePlay = {handleMoviePlay}
    onMovieAddToList = {handleMovieAddToList}
    onMovieSelect = {handleMovieSelect}
    onGenreSelect = {handleGenreSelect}
  />;
};


App.propTypes = {
  promo: promoType.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  genres: PropTypes.arrayOf(genreType).isRequired,
};


export default App;
