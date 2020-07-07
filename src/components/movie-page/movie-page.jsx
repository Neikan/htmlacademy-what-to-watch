import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import MoviesByGenre from "../movies-by-genre/movies-by-genre.jsx";
import {movieType} from "../../props/prop-types.js";
import {getImgSrc} from "../../utils/common.js";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieOverView from "../movie-overview/movie-overview.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";


const MoviePage = (props) => {
  const {movie, movies, onMovieSelect} = props;
  const {title, genre, year, poster} = movie;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={getImgSrc(poster)} alt={title} width="218" height="327" />
            </div>

            <MovieDetails movie={movie} />
            <MovieOverView movie={movie} />
            <MovieReviews movie={movie} />

          </div>
        </div>
      </section>

      <MoviesByGenre
        movies={movies}
        onMovieSelect = {onMovieSelect}
      />
    </>
  );
};


MoviePage.propTypes = {
  movie: movieType.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviePage;
