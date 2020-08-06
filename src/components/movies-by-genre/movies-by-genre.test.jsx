// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import MoviesByGenre from "./movies-by-genre.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesByGenre component`, () => {
  test(`MoviesByGenre component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviesByGenre
            movies={MOVIES}
            countShowedMovies={1}
            onMovieSelect={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
