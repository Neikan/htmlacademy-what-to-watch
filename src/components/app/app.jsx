import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const movieTitleClickHandler = () => {};
const genreTitleClickHandler = () => {};

const App = (props) => {
  const {promoTitle, promoGenre, promoDate, movies, genres} = props;

  return <Main
    promoTitle = {promoTitle}
    promoGenre = {promoGenre}
    promoDate = {promoDate}
    movies = {movies}
    genres = {genres}
    onMovieTitleClick = {movieTitleClickHandler}
    onGenreTitleClick = {genreTitleClickHandler}
  />;
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoDate: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};


export default App;
