import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {movieType} from "../../props/prop-types";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null
    };

    this._timeout = null;

    this.handleMovieMouseEnter = this.handleMovieMouseEnter.bind(this);
    this.handleMovieMouseLeave = this.handleMovieMouseLeave.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку разметки компонента с данными первых восьми фильмов
   * @return {Object} разметка компонента
   */
  render() {
    const {movies, countShowedMovies, onMovieSelect} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.slice(0, countShowedMovies).map((movie) => {
          return (
            <MovieCard
              key = {movie.id}
              movie = {movie}
              onSelect = {onMovieSelect}
              onPlay = {this.handleMovieMouseEnter}
              onPlayingStop = {this.handleMovieMouseLeave}
            />
          );
        })}
      </div>
    );
  }


  componentWillUnmount() {
    clearTimeout(this._timeout);
  }


  handleMovieMouseEnter(movie) {
    this._timeout = setTimeout(() => {
      this.setState({
        activeMovieId: movie.id
      });
    }, 10000);
  }


  handleMovieMouseLeave() {
    clearTimeout(this._timeout);
    this.setState({
      activeMovieId: null
    });
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  countShowedMovies: PropTypes.number.isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesList;
