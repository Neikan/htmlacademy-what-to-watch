import React from "react";
import PropTypes from "prop-types";
import {GENRES} from "../../consts/common-data";


const MarkupClass = {
  DEFAULT: `catalog__genres-item`,
  ACTIVE: `catalog__genres-item--active`
};


const CatalogGenreItem = (props) => {
  const {id, title, onTitleClick} = props;

  const className = id === GENRES[0].id
    ? `${MarkupClass.DEFAULT} ${MarkupClass.ACTIVE}`
    : MarkupClass.DEFAULT;

  return (
    <li className={className}>
      <a
        href="#"
        onClick={onTitleClick}
        className="catalog__genres-link"
      >
        {title}
      </a>
    </li>
  );
};

CatalogGenreItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired
};


export default CatalogGenreItem;
