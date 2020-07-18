import {Url, FileExtension, CountMovies, ALL_GENRES} from "../consts/common-data";


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


/**
 * Генерация идентификатора для фильмов и комментариев
 * @return {string}
 */
export const generateId = () => `f${(+new Date()).toString(16)}${Math.random() * 1e8}`;


/**
 * Обновление свойства isActive для жанров
 * @param {Array} genres массив жанров
 * @param {string} selectedGenre выбранный жанр
 * @return {Array} обновленный массив
 */
export const updateGenres = (genres, selectedGenre) => genres.map((genre) =>
  Object.assign(genre, {
    isActive: genre.title === selectedGenre
  })
);


/**
 * Получение массива уникальных жанров с добавлением свойств для рендера
 * @param {Array} movies массив с данными фильмов
 * @return {Array} массив уникальных жанров фильмов со свойствами и 'All genres'
 */
export const getGenres = (movies) => {
  const uniqueGenres = [ALL_GENRES];

  movies.map((movie) => {
    if (!uniqueGenres.includes(movie.genre)) {
      uniqueGenres.push(movie.genre);
    }
  });

  return uniqueGenres.map((genre) => {
    return {
      [`id`]: generateId(),
      [`title`]: genre,
      [`isActive`]: genre === ALL_GENRES
    };
  });
};
