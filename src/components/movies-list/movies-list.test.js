// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import MoviesList from "./movies-list.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesList component`, () => {
  test(`When Movies is correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <MoviesList
            movies={MOVIES}
            countShowedMovies={1}
            onMovieSelect={() => {}}
            onMovieMouseEnter={() => {}}
            onMovieMouseLeave={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
