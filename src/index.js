import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {PromoMovie, CountMovie, GENRES} from "./consts/common-data";
import {generateMovies} from "./mocks/movies-data.js";


const root = document.querySelector(`#root`);
console.log(generateMovies(CountMovie.ALL));
const init = () => {
  ReactDOM.render(
      <App
        promo = {PromoMovie}
        movies = {generateMovies(CountMovie.ALL)}
        genres = {GENRES}
      />,
      root
  );
};


init();
