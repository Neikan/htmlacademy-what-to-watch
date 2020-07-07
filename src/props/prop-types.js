import PropTypes from "prop-types";


export const movieType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    countVotes: PropTypes.number.isRequired,
  }).isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});


export const genreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
});


export const reviewType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
});
