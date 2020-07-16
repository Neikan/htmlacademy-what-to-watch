import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import {tabType} from "../../props/prop-types";
import {MovieTabList} from "../../consts/common-data";


const getMarkupLi = (tab, onTabSelect, selectedTab, isReviews) => {
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
      <a href="#" className='movie-nav__link'>{tab}</a>
    </li>
  );
};


const handleTabSelect = (tab, onTabSelect) => {
  return () => {
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
