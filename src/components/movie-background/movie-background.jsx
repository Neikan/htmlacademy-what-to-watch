import React from "react";
import PropTypes from "prop-types";
import {getImgSrc} from "../../utils/common.js";


const MovieBackground = (props) => {
  const {poster, title} = props;

  return (
    <div className="movie-card__bg">
      <img src={getImgSrc(poster)} alt={title} />
    </div>
  );
};


MovieBackground.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default MovieBackground;
