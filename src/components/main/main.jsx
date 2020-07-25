// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import BtnShowMore from "../btn-show-more/btn-show-more.jsx";
import Footer from "../footer/footer.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Header from "../header/header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import Promo from "../promo/promo.jsx";

// Импорт типов, констант, утилит
import {movieType, genreType} from "../../props/prop-types.js";

// Импорт хоков
import withSelectedMovie from "../../hoc/with-selected-movie/with-selected-movie.js";


const MoviesListWrapped = withSelectedMovie(MoviesList);


/**
 * Создание компонента, обеспечивающего отображение главной страницы приложения
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const Main = (props) => {
  const {
    promoMovie,
    movies,
    genres,
    countShowedMovies,
    onMoviePlay,
    onMovieAddToList,
    onMovieSelect,
    onGenreSelect,
    onBtnMoreSelect
  } = props;

  const {poster, title} = promoMovie;

  const isShowBtnMore = movies.length > countShowedMovies;

  return (
    <>
      <section className="movie-card">
        <MovieBackground
          title={title}
          poster={poster}
        />
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <Promo
          movie={promoMovie}
          onPlay={onMoviePlay}
          onAdd={onMovieAddToList}
          onSelect={onMovieSelect}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            genres={genres}
            onGenreSelect={onGenreSelect}
          />
          <div>
            <MoviesListWrapped
              movies={movies}
              countShowedMovies={countShowedMovies}
              onMovieSelect={onMovieSelect}
            />

            {isShowBtnMore ? <BtnShowMore onSelect={onBtnMoreSelect} /> : null}
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
  countShowedMovies: PropTypes.number.isRequired,
  onMoviePlay: PropTypes.func.isRequired,
  onMovieAddToList: PropTypes.func.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  onBtnMoreSelect: PropTypes.func.isRequired
};


export default Main;
