import {
  TITLES,
  COVERS,
  DIRECTORS,
  ACTORS,
  GENRES,
  DESCRIPTION,
  MOVIE_POSTER
} from './movies-consts';
import {
  getRandomElement,
  getRandomSubArray,
  getRandomInt,
  getRandomDate,
  generateId,
  getRandomRating
} from './movies-utils';


/**
 * Генерация фильма
 * @return {Object} созданный фильм
 */
const generateMovie = () => {
  return {
    id: generateId(),
    title: getRandomElement(TITLES),
    poster: MOVIE_POSTER,
    cover: getRandomElement(COVERS),
    rating: getRandomRating(),
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

