import React from "react";
import PropTypes from "prop-types";
import {tabType} from "../../props/prop-types";
import {getMarkupClass} from "../../utils/common";
import {MovieTabList, HIDDEN_CLASS} from "../../consts/common-data";


const MarkupClass = {
  DEFAULT: `movie-nav__item`,
  ACTIVE: `movie-nav__item movie-nav__item--active`
};


const getMarkupLi = (tab, onTabSelect, selectedTab, isReviews) => {
  const isActive = selectedTab === tab ? true : false;
  let className = getMarkupClass(MarkupClass, isActive);

  if (tab === MovieTabList.REVIEWS && isReviews === false) {
    className = className + ` ${HIDDEN_CLASS}`;
  }

  return (
    <li key={tab}
      className={className}
      onClick={handleTabSelect(tab, onTabSelect)}
    >
      <a href="#" className='movie-nav__link'>{tab}</a>
    </li>
  );
};


const handleTabSelect = (tab, onTabSelect) => {
  return (evt) => {
    evt.preventDefault();
    onTabSelect(tab);
  };
};


const MovieTabs = (props) => {
  const {tabs, onTabSelect, selectedTab, isReviews} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(tabs).map((tab) => getMarkupLi(tab, onTabSelect, selectedTab, isReviews))}
      </ul>
    </nav>
  );
};


MovieTabs.propTypes = {
  tabs: tabType.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  isReviews: PropTypes.bool.isRequired
};


export default MovieTabs;
