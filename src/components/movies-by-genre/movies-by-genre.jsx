// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import Footer from "../footer/footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";

// Импорт хоков
import withSelectedMovie from "../../hoc/with-selected-movie/with-selected-movie.js";


const MoviesListWrapped = withSelectedMovie(MoviesList);


/**
 * Создание компонента, обеспечивающего отображение списка похожих фильмов на странице фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MoviesByGenre = (props) => {
  const {movies, countShowedMovies, onMovieSelect} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesListWrapped
          movies={movies}
          countShowedMovies={countShowedMovies}
          onMovieSelect={onMovieSelect}
        />
      </section>

      <Footer />
    </div>
  );
};


MoviesByGenre.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesByGenre;
