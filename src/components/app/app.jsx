import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const handleMovieSelect = () => {};
const handleGenreSelect = () => {};


const App = (props) => {
  const {promo, movies, genres} = props;

  return <Main
    promo = {promo}
    movies = {movies}
    genres = {genres}
    onMovieSelect = {handleMovieSelect}
    onGenreSelect = {handleGenreSelect}
  />;
};


App.propTypes = {
  promo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    DATE: PropTypes.number.isRequired
  }).isRequired,

  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })).isRequired,

  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  })).isRequired,
};


export default App;
