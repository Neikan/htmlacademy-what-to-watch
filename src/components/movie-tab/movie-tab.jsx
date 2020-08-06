// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {MovieTabList} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение вкладки на странице фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieTab = (props) => {
  const {isReviews, onTabSelect, selectedTab, tab} = props;

  const isActive = selectedTab === tab;
  const isHidden = tab === MovieTabList.REVIEWS && isReviews === false;

  const className = cn(`movie-nav__item`, {
    'movie-nav__item--active': isActive,
    'visually-hidden': isHidden
  });

  return (
    <li key={tab}
      className={className}
      onClick={handleTabSelect(tab, onTabSelect)}
    >
      <Link to="#" className="movie-nav__link">{tab}</Link>
    </li>
  );
};


/**
 * Помощник, обеспечивающий выбор вкладки
 * @param {Object} tab вкладка
 * @param {Object} onTabSelect помощник, обеспечивающий передачу выбранной вкладки в хранилище
 * @return {Function}
 */
const handleTabSelect = (tab, onTabSelect) => {
  return () => {
    onTabSelect(tab);
  };
};


MovieTab.propTypes = {
  isReviews: PropTypes.bool.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};


export default MovieTab;
