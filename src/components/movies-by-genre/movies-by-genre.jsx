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
  const {countShowedMovies, movies, onMovieSelect} = props;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesListWrapped
          countShowedMovies={countShowedMovies}
          movies={movies}
          onMovieSelect={onMovieSelect}
        />
      </section>

      <Footer />
    </div>
  );
};


MoviesByGenre.propTypes = {
  countShowedMovies: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesByGenre;
