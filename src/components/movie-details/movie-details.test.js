// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieDetails from "./movie-details.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieDetails component`, () => {
  test(`When Movie is correctly`, () => {
    const tree = renderer.create(
        <MovieDetails
          movie={MOVIES[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
