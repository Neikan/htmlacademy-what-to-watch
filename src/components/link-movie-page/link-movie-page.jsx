// Импорт библиотек
import React from "react";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types";
import {Page} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение ссылки на страницу фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const LinkMoviePage = (props) => {
  const {id, title} = props.movie;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={`/${Page.MOVIE}/${id}`}
            className="breadcrumbs__link"
          >
            {title}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};


LinkMoviePage.propTypes = {
  movie: movieType.isRequired
};


export default LinkMoviePage;
