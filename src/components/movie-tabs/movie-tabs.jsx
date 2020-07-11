import React from "react";
import PropTypes from "prop-types";
import {tabType} from "../../props/prop-types";
import {getMarkupClass} from "../../utils/common";


const MarkupClass = {
  DEFAULT: `movie-nav__item`,
  ACTIVE: `movie-nav__item movie-nav__item--active`
};


const getMarkupLi = (tab, onTabChange, activeTab) => {
  const isActive = activeTab === tab ? true : false;
  const className = getMarkupClass(MarkupClass, isActive);

  return (
    <li key={tab}
      className={className}
      onClick={handleTabClick(tab, onTabChange)}
    >
      <a href="#" className='movie-nav__link'>{tab}</a>
    </li>
  );
};


const handleTabClick = (tab, onTabChange) => {
  return (evt) => {
    evt.preventDefault();
    onTabChange(tab);
  };
};


const MovieTabs = (props) => {
  const {tabs, onTabSelect, selectedTab} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(tabs).map((tab) => getMarkupLi(tab, onTabSelect, selectedTab))}
      </ul>
    </nav>
  );
};


MovieTabs.propTypes = {
  tabs: tabType.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired
};


export default MovieTabs;
