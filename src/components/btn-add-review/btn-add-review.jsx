// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {AuthStatus, Page} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение ссылки на страницу добавления отзыва
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const BtnAddReview = (props) => {
  const {authStatus, id} = props;

  return authStatus === AuthStatus.AUTH
    ? (
      <Link
        to={`/${Page.MOVIE}/${id}/${Page.ADD_REVIEW}`}
        className="btn movie-card__button"
      >
        Add review
      </Link>)
    : null;
};


BtnAddReview.propTypes = {
  authStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


export default BtnAddReview;
