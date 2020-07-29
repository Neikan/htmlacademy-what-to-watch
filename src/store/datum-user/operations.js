// Импорт типов, констант, утилит
import userAdapter from "./adapter";

// Импорт редьюсеров, селекторов
import {AuthStatus, Url} from "../../consts/common-data";
import {ActionCreator} from "./datum-user.js";


const Operation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/${Url.LOGIN}`)
      .then((response) => {
        dispatch(ActionCreator.requireAuth(AuthStatus.AUTH));
        dispatch(ActionCreator.setUserDatum(userAdapter(response.data)));
      })
      .catch((err) => {
        throw err;
      })
  ),

  login: (authData) => (dispatch, getState, api) => (
    api.post(`/${Url.LOGIN}`, {
      email: authData.login,
      password: authData.password
    })
    .then((response) => {
      dispatch(ActionCreator.requireAuth(AuthStatus.AUTH));
      dispatch(ActionCreator.setUserDatum(userAdapter(response.data)));
    })
    .catch((err) => {
      throw err;
    })
  )
};


export {Operation};
