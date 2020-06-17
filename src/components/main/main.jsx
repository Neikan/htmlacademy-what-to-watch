import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import CatalogGenreItem from "../catalog-genre-item/catalog-genre-item.jsx";
import {LogoPosition} from "../../consts/common-data.js";


const Main = (props) => {
  const {promo, movies, genres, onMovieTitleClick, onGenreTitleClick} = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header logoPosition = {LogoPosition.HEADER}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={promo.TITLE} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2
                onClick={onMovieTitleClick}
                className="movie-card__title"
              >
                {promo.TITLE}
              </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.GENRE}</span>
                <span className="movie-card__year">{promo.DATE}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre) =>
              <CatalogGenreItem
                key = {genre.id}
                id = {genre.id}
                title = {genre.title}
                onTitleClick = {onGenreTitleClick}
              />)
            }
          </ul>

          <div className="catalog__movies-list">
            {movies.map((movie) =>
              <MovieCard
                key = {movie.id}
                title = {movie.title}
                poster = {movie.poster}
                onTitleClick={onMovieTitleClick}
              />)
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer logoPosition = {LogoPosition.FOOTER}/>
      </div>
    </>
  );
};


Main.propTypes = {
  promo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    DATE: PropTypes.number.isRequired
  }),

  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })),

  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),

  onMovieTitleClick: PropTypes.func.isRequired,
  onGenreTitleClick: PropTypes.func.isRequired
};


export default Main;
