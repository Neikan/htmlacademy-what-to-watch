import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const handleMovieDetailsOpen = () => {};
const handleCatalogGenreSwitchOver = () => {};

const App = (props) => {
  const {promo, movies, genres} = props;

  return <Main
    promo = {promo}
    movies = {movies}
    genres = {genres}
    onMovieDetailsOpen = {handleMovieDetailsOpen}
    onCatalogGenreSwitchOver = {handleCatalogGenreSwitchOver}
  />;
};


App.propTypes = {
  promo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};


export default App;
