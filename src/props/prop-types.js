import PropTypes from "prop-types";


export const promoType = PropTypes.shape({
  TITLE: PropTypes.string.isRequired,
  GENRE: PropTypes.string.isRequired,
  DATE: PropTypes.number.isRequired
});


export const movieType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
});


export const genreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
});
