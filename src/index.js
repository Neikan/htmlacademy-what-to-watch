import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {reducer} from "./store/reducer.js";
import {createStore} from "redux";
import {Provider} from "react-redux";


const root = document.querySelector(`#root`);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
  );
};


init();
