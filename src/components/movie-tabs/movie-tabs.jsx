import React from "react";
import PropTypes from "prop-types";
import {getMarkupClass} from "../../utils/common";


const MarkupClass = {
  DEFAULT: `movie-nav__link`,
  ACTIVE: `movie-nav__item movie-nav__item--active`
};

const MovieTabs = (props) => {
  const {isActive} = props;

  const className = getMarkupClass(MarkupClass, isActive);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className="movie-nav__item">
          <a href="#" className={className}>Overview</a>
        </li>
        <li className="movie-nav__item">
          <a href="#" className={className}>Details</a>
        </li>
        <li className="movie-nav__item movie-nav__item--active">
          <a href="#" className={className}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
};


MovieTabs.propTypes = {
  isActive: PropTypes.bool.isRequired
};


export default MovieTabs;
