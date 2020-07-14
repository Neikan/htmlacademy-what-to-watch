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


/**
 * Получение классов разметки для элемента в зависимости от его статуса
 * @param {Object} MarkupClass возможные классы элемента
 * @param {Boolean} isActive признак, определяющий активен элемент или нет
 * @return {string} полученный перечень классов
 */
export const getMarkupClass = (MarkupClass, isActive) =>
  isActive ? `${MarkupClass.DEFAULT} ${MarkupClass.ACTIVE}` : MarkupClass.DEFAULT;


/**
 * Получение интервалов для отрисовки данных массива в колонках
 * @param {Array} array массив данных
 * @return {Object} объект с интервалами
 */
export const getIntervalForCols = (array) => {
  if (array.length === 1) {
    return [{
      begin: 0,
      end: 1
    }];
  }

  if (array.length >= 2) {
    const countHalf = Math.ceil(array.length / 2);

    return [
      {
        begin: 0,
        end: countHalf
      }, {
        begin: countHalf,
        end: array.length
      }
    ];
  }

  return null;
};
