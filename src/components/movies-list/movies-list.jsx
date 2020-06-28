import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {movieType} from "../../props/prop-types";
import {CountMovie, MarkupElement} from "../../consts/common-data.js";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null
    };

    this._timeout = {
      PLAY_PREVIEW: 10000,
      RESET: null
    };

    this.handleMovieMouseOver = this.handleMovieMouseOver.bind(this);
    this.handleMovieMouseOut = this.handleMovieMouseOut.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку разметки компонента с данными первых восьми фильмов
   * @return {Object} разметка компонента
   */
  render() {
    const {movies, onMovieSelect} = this.props;

    return (
      <div>
        <div className="catalog__movies-list">
          {movies.slice(0, CountMovie.START).map((movie) => {
            return (
              <MovieCard
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                cover = {movie.cover}
                onMovieSelect = {onMovieSelect}
                onMovieMouseOver = {this.handleMovieMouseOver}
                onMovieMouseOut = {this.handleMovieMouseOut}
              />
            );
          })}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </div>
    );
  }


  componentWillUnmount() {
    clearTimeout(this._timeout.RESET);
  }


  handleMovieMouseOver(evt) {
    const movieId = evt.target.closest(`.${MarkupElement.MOVIE_CARD}`).id;

    setTimeout(() => {
      this.setState({
        activeMovieId: movieId
      });
    }, this._timeout.PLAY_PREVIEW);
  }


  handleMovieMouseOut() {
    clearTimeout(this._timeout.RESET);
    this.setState({
      activeMovieId: null
    });
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
  onMovieSelect: PropTypes.func.isRequired
};


export default MoviesList;
