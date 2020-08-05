// Импорт библиотек
import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";

// Импорт компонентов
import App from "./components/app/app.jsx";

// Импорт типов, констант, утилит
import {AuthStatus} from "./consts/common-data.js";
import createAPI from "./api/index.js";

// Импорт редьюсеров, селекторов
import reducer from './store/reducer.js';
import {ActionCreator} from "./store/datum-user/datum-user.js";


const root = document.querySelector(`#root`);


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuth(AuthStatus.NO_AUTH));
};


const api = createAPI(onUnauthorized);


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


/**
 * Инициализация приложения
 */
const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
  );
};


init();
