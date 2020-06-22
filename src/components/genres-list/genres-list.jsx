import React from "react";
import PropTypes from "prop-types";
import CatalogGenre from "../catalog-genre/catalog-genre.jsx";
import {genreType} from "../../props/prop-types";


const GenresList = (props) => {
  const {genres, onGenreSelect} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <CatalogGenre
          key = {genre.id}
          title = {genre.title}
          isActive = {genre.isActive}
          onGenreSelect = {onGenreSelect}
        />)
      }
    </ul>
  );
};


GenresList.propTypes = {
  genres: PropTypes.arrayOf(genreType).isRequired,
  onGenreSelect: PropTypes.func.isRequired
};


export default GenresList;
