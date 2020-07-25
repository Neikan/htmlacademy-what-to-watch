import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {movieType} from "../../props/prop-types";
import MoviePlayerPreview from "../movie-player-preview/movie-player-preview.jsx";


class MovieCard extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {movie, isPlaying, onPlay, onStop, onSelect} = this.props;
    const {id, title, cover, preview} = movie;

    return (
      <article
        onMouseEnter={onPlay}
        onMouseLeave={onStop}
        onClick={onSelect}
        id={id}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <MoviePlayerPreview muted
            isPlaying={isPlaying}
            src={preview}
            cover={cover}
          />
        </div>
        <h3
          onClick={onSelect}
          className="small-movie-card__title"
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}


MovieCard.propTypes = {
  movie: movieType.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default MovieCard;
