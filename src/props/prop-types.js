import PropTypes from "prop-types";


export const reviewType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
});


export const movieType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    countVotes: PropTypes.number.isRequired,
  }).isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(reviewType)
});


export const genreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
});


export const tabType = PropTypes.objectOf(PropTypes.string);


export const timeType = PropTypes.shape({
  duration: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  left: PropTypes.string.isRequired
});
