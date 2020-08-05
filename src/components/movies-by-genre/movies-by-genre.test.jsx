// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";

// Импорт компонентов
import MoviesByGenre from "./movies-by-genre.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesByGenre component`, () => {
  test(`MoviesByGenre component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <MoviesByGenre
            movies={MOVIES}
            countShowedMovies={1}
            onMovieSelect={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
