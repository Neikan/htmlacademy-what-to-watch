import {
  TITLES,
  COVERS,
  DIRECTORS,
  ACTORS,
  GENRES,
  DESCRIPTION,
  PREVIEWS,
  REVIEWS
} from './movies-consts';
import {
  getRandomElement,
  getRandomSubArray,
  getRandomInt,
  getRandomDate,
  getRandomRating,
  getTextualRating
} from './movies-utils';
import {generateId} from '../utils/common';


/**
 * Генерация фильма
 * @return {Object} созданный фильм
 */
const generateMovie = () => {
  const ratingScore = getRandomRating();
  const image = getRandomElement(COVERS);

  return {
    id: generateId(),
    title: getRandomElement(TITLES),
    poster: image,
    cover: image,
    preview: getRandomElement(PREVIEWS),
    rating: {
      score: ratingScore,
      level: getTextualRating(ratingScore),
      countVotes: getRandomInt(240),
    },
    director: getRandomElement(DIRECTORS),
    actors: getRandomSubArray(ACTORS).join(`, `),
    duration: getRandomInt(240),
    year: getRandomDate(new Date()).getFullYear(),
    genre: getRandomElement(GENRES),
    description: getRandomElement(DESCRIPTION),
    reviews: getRandomSubArray(REVIEWS)
  };
};


/**
 * Генерация заданного количества фильмов
 * @param {Number} count количество фильмов
 * @return {Array} массив сгенерированных фильмов
 */
export const generateMovies = (count) => new Array(count).fill({}).map(generateMovie);
