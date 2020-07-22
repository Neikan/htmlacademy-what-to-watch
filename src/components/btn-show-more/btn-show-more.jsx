import React from "react";
import PropTypes from "prop-types";


const handleSelect = (onSelect) => (evt) => {
  evt.preventDefault();
  onSelect();
};


const BtnShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={handleSelect(props.onSelect)}
      >
        Show more
      </button>
    </div>
  );
};


BtnShowMore.propTypes = {
  onSelect: PropTypes.func.isRequired
};


export default BtnShowMore;
