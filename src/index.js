// Импорт библиотек
import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";

// Импорт компонентов
import App from "./components/app/app.jsx";

// Импорт типов, констант, утилит
import createAPI from "./api/index.js";

// Импорт редьюсеров, селекторов
import reducer from './store/reducer.js';
import {Operation as DatumOperation} from './store/datum/operations.js';


const api = createAPI();

const root = document.querySelector(`#root`);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


store.dispatch(DatumOperation.loadPromoMovie());
store.dispatch(DatumOperation.loadMovies());


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
