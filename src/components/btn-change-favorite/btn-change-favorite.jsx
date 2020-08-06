// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import history from "../../history.js";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";
import {AuthStatus, Page} from "../../consts/common-data";
import {getAuthStatus} from "../../store/datum-user/selectors";


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
   * @return {*}
   */
  _handleChange() {
    const {authStatus, movie, onChangeMyList} = this.props;

    return authStatus === AuthStatus.AUTH ? onChangeMyList(movie) : history.push(`/${Page.LOGIN}`);
  }
}


BtnChangeFavorite.propTypes = {
  authStatus: PropTypes.string.isRequired,
  movie: movieType.isRequired,
  onChangeMyList: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export {BtnChangeFavorite};
export default connect(mapStateToProps)(BtnChangeFavorite);
