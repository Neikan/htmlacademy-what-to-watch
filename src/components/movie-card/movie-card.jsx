// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Импорт компонентов
import MoviePlayerPreview from "../movie-player-preview/movie-player-preview.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";
import {Page} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение карточки-превью фильма
 */
class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSelect = this._handleSelect.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {isPlaying, movie, onPlay, onStop} = this.props;
    const {cover, id, preview, title} = movie;

    return (
      <article
        onMouseEnter={onPlay}
        onMouseLeave={onStop}
        onClick={this._handleSelect}
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
          onClick={this._handleSelect}
          className="small-movie-card__title"
        >
          <Link className="small-movie-card__link" to={`/${Page.MOVIE}/${id}`}>{title}</Link>
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
  isPlaying: PropTypes.bool.isRequired,
  movie: movieType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};


export default MovieCard;
