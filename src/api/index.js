// Импорт библиотек
import axios from "axios";

// Импорт типов, констант, утилит
import {BASE_URL, RequestStatusCode, Timeout, Url} from "../consts/common-data";


/**
 * Создание подключения к серверу
 * @param {Function} onUnauthorized
 * @return {Object} ответ сервера
 */
const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/${Url.WTW}`,
    timeout: Timeout.REQUEST,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === RequestStatusCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createAPI;
