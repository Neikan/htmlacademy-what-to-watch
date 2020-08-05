// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";


/**
 * Создание компонента, обеспечивающего добавление/удаление фильма из списка избранного
 */
class BtnChangeFavorite extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {movie} = this.props;

    return (
      <button
        onClick={this._handleChange}
        type="button"
        className="btn btn--list movie-card__button">
        {movie.isFavorite
          ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>)
          : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>)
        }
        <span>My list</span>
      </button>
    );
  }


  /**
   * Метод, обеспечивающий добавление/удаление фильма из списка избранных
   */
  _handleChange() {
    const {movie, onChangeMyList} = this.props;

    onChangeMyList(movie);
  }
}


BtnChangeFavorite.propTypes = {
  movie: movieType.isRequired,
  onChangeMyList: PropTypes.func.isRequired
};


export default BtnChangeFavorite;
