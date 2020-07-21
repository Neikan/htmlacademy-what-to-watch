import React from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";
import {genreType} from "../../props/prop-types";
import {COUNT_GENRES} from "../../consts/common-data.js";


const GenresList = (props) => {
  const {genres, onGenreSelect} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.slice(0, COUNT_GENRES).map((genre) =>
        <GenreItem
          key = {genre.id}
          title = {genre.title}
          isActive = {genre.isActive}
          onGenreSelect = {onGenreSelect}
        />
      )}
    </ul>
  );
};


GenresList.propTypes = {
  genres: PropTypes.arrayOf(genreType).isRequired,
  onGenreSelect: PropTypes.func.isRequired
};


export default GenresList;
