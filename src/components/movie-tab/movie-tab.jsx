import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import {MovieTabList} from "../../consts/common-data";


const MovieTab = (props) => {
  const {tab, onTabSelect, selectedTab, isReviews} = props;

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


MovieTab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  isReviews: PropTypes.bool.isRequired
};


export default MovieTab;
