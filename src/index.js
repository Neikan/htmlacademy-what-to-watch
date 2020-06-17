import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Promo, MOVIES, GENRES} from "./consts/common-data";

const root = document.querySelector(`#root`);

const init = () => {
  ReactDOM.render(
      <App
        promo = {Promo}
        movies = {MOVIES}
        genres = {GENRES}
      />,
      root
  );
};


init();
