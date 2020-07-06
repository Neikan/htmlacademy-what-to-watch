import {
  TITLES,
  COVERS,
  DIRECTORS,
  ACTORS,
  GENRES,
  DESCRIPTION,
  MOVIE_POSTER,
  PREVIEWS
} from './movies-consts';
import {
  getRandomElement,
  getRandomSubArray,
  getRandomInt,
  getRandomDate,
  generateId,
  getRandomRating,
  getTextualRating
} from './movies-utils';


/**
 * Генерация фильма
 * @return {Object} созданный фильм
 */
const generateMovie = () => {
  const ratingScore = getRandomRating();

  return {
    id: generateId(),
    title: getRandomElement(TITLES),
    poster: MOVIE_POSTER,
    cover: getRandomElement(COVERS),
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
    description: getRandomElement(DESCRIPTION)
  };
};


/**
 * Генерация заданного количества фильмов
 * @param {Number} count количество фильмов
 * @return {Array} массив сгенерированных фильмов
 */
export const generateMovies = (count) => new Array(count).fill({}).map(generateMovie);
