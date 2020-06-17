import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const movieTitleClickHandler = () => {};
const genreTitleClickHandler = () => {};

const App = (props) => {
  const {promo, movies, genres} = props;

  return <Main
    promo = {promo}
    movies = {movies}
    genres = {genres}
    onMovieTitleClick = {movieTitleClickHandler}
    onGenreTitleClick = {genreTitleClickHandler}
  />;
};


App.propTypes = {
  promo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};


export default App;
