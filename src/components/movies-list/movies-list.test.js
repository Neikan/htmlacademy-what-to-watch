// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MoviesList from "./movies-list.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesList component`, () => {
  test(`When Movies is correctly`, () => {
    const tree = renderer.create(
        <MoviesList
          movies={MOVIES}
          countShowedMovies={1}
          onMovieSelect={() => {}}
          onMovieMouseEnter={() => {}}
          onMovieMouseLeave={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
