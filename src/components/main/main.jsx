import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Promo from "../promo/promo.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import BtnShowMore from "../btn-show-more/btn-show-more.jsx";
import Footer from "../footer/footer.jsx";
import {movieType, genreType} from "../../props/prop-types.js";


const Main = (props) => {
  const {promoMovie, movies, genres, onMoviePlay, onMovieAddToList, onMovieSelect, onGenreSelect} = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <Promo
          movie = {promoMovie}
          onPlay = {onMoviePlay}
          onAdd = {onMovieAddToList}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            genres = {genres}
            onGenreSelect = {onGenreSelect}
          />
          <div>
            <MoviesList
              movies = {movies}
              onMovieSelect = {onMovieSelect}
            />

            <BtnShowMore />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};


Main.propTypes = {
  promoMovie: movieType.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  genres: PropTypes.arrayOf(genreType).isRequired,
  onMoviePlay: PropTypes.func.isRequired,
  onMovieAddToList: PropTypes.func.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};


export default Main;
