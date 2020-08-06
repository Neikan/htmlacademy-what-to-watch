// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {Page} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего запуск проигрывателя фильма
 */
class BtnPlay extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangePlaying = this._handleChangePlaying.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {id} = this.props;

    return (
      <Link
        to={`/${Page.PLAYER}/${id}`}
        onClick={this._handleChangePlaying}
        className="btn btn--play movie-card__button" type="button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
    );
  }


  /**
   * Метод, обеспечивающий управление проигрывателем фильма
   */
  _handleChangePlaying() {
    const {onChangePlaying} = this.props;

    onChangePlaying();
  }
}


BtnPlay.propTypes = {
  id: PropTypes.string.isRequired,
  onChangePlaying: PropTypes.func.isRequired
};


export default BtnPlay;
