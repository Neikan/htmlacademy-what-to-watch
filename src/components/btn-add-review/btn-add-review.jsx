// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {AuthStatus, Page} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отрисовку ссылки на страницу добавления отзыва
 */
class BtnAddReview extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {authStatus, id} = this.props;

    return authStatus === AuthStatus.AUTH
      ? (
        <Link
          to={`/${Page.MOVIE}/${id}/${Page.ADD_REVIEW}`}
          className="btn movie-card__button"
        >
          Add review
        </Link>)
      : null;
  }
}


BtnAddReview.propTypes = {
  authStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


export default BtnAddReview;
