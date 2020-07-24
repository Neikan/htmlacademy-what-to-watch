import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {movieType} from "../../props/prop-types";
import withActivePlayer from "../../hoc/with-active-player/with-active-player.js";


const MovieCardWrapped = withActivePlayer(MovieCard);


class MoviesList extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку разметки компонента с данными первых восьми фильмов
   * @return {Object} разметка компонента
   */
  render() {
    const {
      movies,
      countShowedMovies,
      onMovieSelect,
      onMovieMouseEnter,
      onMovieMouseLeave
    } = this.props;

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
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  onMovieSelect: PropTypes.func.isRequired,

  onMovieMouseEnter: PropTypes.func.isRequired,
  onMovieMouseLeave: PropTypes.func.isRequired
};


export default MoviesList;
