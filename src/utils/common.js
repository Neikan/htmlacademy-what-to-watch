import {Url, FileExtension, CountMovies} from "../consts/common-data";


/**
 * Получение файла постера фильма
 * @param {string} poster название постера
 * @return {string}
 */
export const getImgSrc = (poster) => `/${Url.IMG}/${poster}.${FileExtension.JPG}`;


/**
 * Получение массива фильмов одного жанра
 * @param {Array} movies данные фильмов
 * @param {string} genre жанр
 * @return {Array} массив фильмов выбранного жанра
 */
export const getMoviesByGenre = (movies, genre) =>
  movies.filter((movie) => movie.genre === genre);


/**
 * Получение поможих фильмов по жанру
 * @param {Array} movies данные фильмов
 * @param {string} genre жанр
 * @param {string} id идентификатор фильма
 * @param {Number} count количество похожих фильмов
 * @return {Array} массив фильмов того же жанра, что и выбранный
 */
export const getLikedMoviesByGenre = (movies, genre, id, count = CountMovies.LIKED_BY_GENRE) =>
  getMoviesByGenre(movies, genre)
    .filter((movie) => movie.id !== id)
    .slice(0, count);