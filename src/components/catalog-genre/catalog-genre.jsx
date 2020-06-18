import React from "react";
import PropTypes from "prop-types";
import {CATALOG_GENRE_DEFAULT} from "../../consts/common-data";


const MarkupClass = {
  DEFAULT: `catalog__genres-item`,
  ACTIVE: `catalog__genres-item--active`
};


const CatalogGenre = (props) => {
  const {title, onCatalogGenreSwitchOver} = props;

  const className = title === CATALOG_GENRE_DEFAULT
    ? `${MarkupClass.DEFAULT} ${MarkupClass.ACTIVE}`
    : MarkupClass.DEFAULT;

  return (
    <li className={className}>
      <a
        href="#"
        onClick={onCatalogGenreSwitchOver}
        className="catalog__genres-link"
      >
        {title}
      </a>
    </li>
  );
};

CatalogGenre.propTypes = {
  title: PropTypes.string.isRequired,
  onCatalogGenreSwitchOver: PropTypes.func.isRequired
};


export default CatalogGenre;
