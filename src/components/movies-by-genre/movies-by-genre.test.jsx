// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MoviesByGenre from "./movies-by-genre.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesByGenre component`, () => {
  test(`MoviesByGenre component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviesByGenre
          movies={MOVIES}
          countShowedMovies={1}
          onMovieSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
