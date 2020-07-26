// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import MoviePlayerPreview from "../movie-player-preview/movie-player-preview.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";


/**
 * Создание компонента, обеспечивающего отображение карточки-превью фильма
 */
class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSelect = this._handleSelect.bind(this);
  }


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
        onClick={this._handleSelect}
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


  /**
   * Метод, обспечивающий передачу данных выбранного фильма для открытия его страницы
   * @param {Object} movieId идентификатор фильма
   */
  _handleSelect() {
    const {movie, onSelect} = this.props;

    onSelect(movie);
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
