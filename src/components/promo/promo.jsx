// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import BtnChangeFavorite from "../btn-change-favorite/btn-change-favorite.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";


/**
 * Создание компонента, обеспечивающего отображение промо-фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
class Promo extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangePlaying = this._handleChangePlaying.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {movie, onChangeMyList} = this.props;
    const {genre, id, poster, title, year} = movie;

    return (
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            onClick={this._handleSelect}
            className="movie-card__poster"
          >
            <img src={poster} alt={title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2
              onClick={this._handleSelect}
              className="movie-card__title"
            >
              {title}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <BtnPlay
                id={id}
                onChangePlaying={this._handleChangePlaying}
              />
              <BtnChangeFavorite
                movie={movie}
                onChangeMyList={onChangeMyList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


  /**
   * Метод, обеспечивающий переход на страницу фильма
   */
  _handleSelect() {
    const {movie, onSelect} = this.props;

    onSelect(movie);
  }


  /**
   * Метод, обеспечивающий управление проигрывателем фильма
   */
  _handleChangePlaying() {
    const {onChangePlaying} = this.props;

    onChangePlaying();
  }
}


Promo.propTypes = {
  movie: movieType.isRequired,

  onChangeMyList: PropTypes.func.isRequired,
  onChangePlaying: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default Promo;
