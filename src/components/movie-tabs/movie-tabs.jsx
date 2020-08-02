// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import MovieTab from "../movie-tab/movie-tab.jsx";

// Импорт типов, констант, утилит
import {tabType} from "../../props/prop-types";


/**
 * Создание компонента, обеспечивающего отображение списка вкладок на странице фильма
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const MovieTabs = (props) => {
  const {isReviews, onTabSelect, selectedTab, tabs} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(tabs).map((tab) => {
          return (
            <MovieTab
              key={tab}
              isReviews={isReviews}
              onTabSelect={onTabSelect}
              selectedTab={selectedTab}
              tab={tab}
            />
          );
        })}
      </ul>
    </nav>
  );
};


MovieTabs.propTypes = {
  isReviews: PropTypes.bool.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: tabType.isRequired
};


export default MovieTabs;
