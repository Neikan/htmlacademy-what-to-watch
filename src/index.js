import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {CountMovies, GENRES} from "./consts/common-data";
import {generateMovies} from "./mocks/movies-data.js";


const root = document.querySelector(`#root`);

const init = () => {
  const movies = generateMovies(CountMovies.ALL);

  ReactDOM.render(
      <App
        promoMovie = {movies[0]}
        movies = {movies}
        genres = {GENRES}
      />,
      root
  );
};


init();
