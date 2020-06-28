import React from "react";
import PropTypes from "prop-types";


const MarkupClass = {
  DEFAULT: `catalog__genres-item`,
  ACTIVE: `catalog__genres-item--active`
};


const GenreItem = (props) => {
  const {title, isActive, onGenreSelect} = props;

  const className = isActive ? `${MarkupClass.DEFAULT} ${MarkupClass.ACTIVE}` : MarkupClass.DEFAULT;

  return (
    <li className={className}>
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
  isActive: PropTypes.bool,
  onGenreSelect: PropTypes.func.isRequired
};


export default GenreItem;
