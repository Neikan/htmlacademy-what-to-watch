import {RATING_MAX, StartDate} from "./movies-consts";


/**
 * Перемешивание массива
 * @param {Array} array исходный массив данных
 * @return {Array} новый перемешанный массив
 */
export const getShuffleArray = (array) => {
  const newArray = array.slice();
  let j;

  for (let i = newArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [newArray[j], newArray[i]] = [newArray[i], newArray[j]];
  }

  return newArray;
};


/**
 * Создание случайного подмассива из массива
 * @param {Array} array исходный массив данных
 * @return {Array} подмассив
 */
export const getRandomSubArray = (array) =>
  getShuffleArray(array).slice(0, getRandomInt(array.length, 1));


/**
 * Получение случайного значения рейтинга фильма
 * @return {Number} значение рейтинга
 */
export const getRandomRating = () => Number(Math.fround(Math.random() * RATING_MAX).toFixed(1));


/**
 * Получение случайного числа из диапазона
 * @param {Number} max большее число
 * @param {Number} min меньшее число
 * @return {Number} полученное случайное число
 */
export const getRandomInt = (max, min = 0) => {
  return min + Math.floor(Math.random() * (max - min));
};


/**
 * Получение случайного элемента массива
 * @param {Array} array массив для получения элемента
 * @return {Object} случайный элемент массива
 */
export const getRandomElement = (array) => array[getRandomInt(array.length)];


/**
 * Получение случайной даты
 * @param {Date} maxDate
 * @param {Date} minDate
 * @return {Date} полученная дата
 */
export const getRandomDate = (maxDate, minDate = new Date(StartDate.YEAR, StartDate.MONTH, StartDate.DAY)) =>
  new Date(getRandomInt(maxDate.getTime(), minDate.getTime()));


/**
 * Генерация идентификатора для фильмов и комментариев
 * @return {string}
 */
export const generateId = () => `f${(+new Date()).toString(16)}${Math.random() * 1e8}`;
