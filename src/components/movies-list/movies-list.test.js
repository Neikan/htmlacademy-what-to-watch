// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import MoviesList from "./movies-list.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesList component`, () => {
  test(`When Movies is correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviesList
            movies={MOVIES}
            countShowedMovies={1}
            onMovieSelect={() => {}}
            onMovieMouseEnter={() => {}}
            onMovieMouseLeave={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
