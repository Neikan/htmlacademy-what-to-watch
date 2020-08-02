// Импорт библиотек
import axios from "axios";

// Импорт типов, констант, утилит
import {BASE_URL, Url} from "../consts/common-data";


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
const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/${Url.WTW}`,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === RequestStatusCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createAPI;
