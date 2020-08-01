// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import MovieCard from "../movie-card/movie-card.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";

// Импорт хоков
import withActivePlayer from "../../hoc/with-active-player/with-active-player.js";


const MovieCardWrapped = withActivePlayer(MovieCard);


/**
 * Создание компонента, обеспечивающего отображение списков фильмов
 * на главной странице и на странице фильма в списке похожих
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MoviesList = (props) => {
  const {
    movies,
    countShowedMovies,
    onMovieSelect,
    onMovieMouseEnter,
    onMovieMouseLeave
  } = props;

  return (
    <div className="catalog__movies-list">
      {movies.slice(0, countShowedMovies).map((movie) => {
        return (
          <MovieCardWrapped
            key={movie.id}
            movie={movie}
            onSelect={onMovieSelect}
            onPlay={onMovieMouseEnter}
            onPlayingStop={onMovieMouseLeave}
          />
        );
      })}
    </div>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onMovieMouseEnter: PropTypes.func.isRequired,
  onMovieMouseLeave: PropTypes.func.isRequired
};


export default MoviesList;
