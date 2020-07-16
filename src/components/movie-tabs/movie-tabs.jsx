import React from "react";
import PropTypes from "prop-types";
import {tabType} from "../../props/prop-types";
import MovieTab from "../movie-tab/movie-tab.jsx";


const MovieTabs = (props) => {
  const {tabs, onTabSelect, selectedTab, isReviews} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(tabs).map((tab) => {
          return (
            <MovieTab
              key={tab}
              tab={tab}
              onTabSelect={onTabSelect}
              selectedTab={selectedTab}
              isReviews={isReviews}
            />
          );
        })}
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
