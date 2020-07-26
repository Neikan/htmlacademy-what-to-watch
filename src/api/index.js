// Импорт библиотек
import axios from "axios";


const BASE_URL = `https://4.react.pages.academy/wtw`;

const REQUEST_TIMEOUT = 5000;

const RequestStatusCode = {
  OK: 200,
  MULTIPLE: 300,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};


/**
 * Создание подключения к серверу
 * @param {Function} onUnauthorized
 * @return {Object} ответ сервера
 */
const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === RequestStatusCode.UNAUTHORIZED) {
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createAPI;
