// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import {Link} from "react-router-dom";


/**
 * Создание компонента, обеспечивающего возможность отображения списка
 * фильмов, соответствующих выбранному жанру
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const GenreItem = (props) => {
  const {title, isActive, onGenreSelect} = props;

  const className = cn(`catalog__genres-item`, {
    'catalog__genres-item--active': isActive
  });

  return (
    <li className={className}>
      <Link
        to="#"
        onClick={() => onGenreSelect(title)}
        className="catalog__genres-link"
      >
        {title}
      </Link>
    </li>
  );
};


GenreItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};


export default GenreItem;
