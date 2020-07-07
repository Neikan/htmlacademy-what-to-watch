import React from "react";
import PropTypes from "prop-types";
import {getMarkupClass} from "../../utils/common";


const MarkupClass = {
  DEFAULT: `catalog__genres-item`,
  ACTIVE: `catalog__genres-item--active`
};


const GenreItem = (props) => {
  const {title, isActive, onGenreSelect} = props;

  return (
    <li className={getMarkupClass(MarkupClass, isActive)}>
      <a
        href="#"
        onClick={onGenreSelect}
        className="catalog__genres-link"
      >
        {title}
      </a>
    </li>
  );
};

GenreItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};


export default GenreItem;
