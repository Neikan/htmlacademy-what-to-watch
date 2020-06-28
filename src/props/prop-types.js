import PropTypes from "prop-types";


export const promoType = PropTypes.shape({
  TITLE: PropTypes.string.isRequired,
  GENRE: PropTypes.string.isRequired,
  DATE: PropTypes.number.isRequired
});


export const movieType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});


export const genreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
});
