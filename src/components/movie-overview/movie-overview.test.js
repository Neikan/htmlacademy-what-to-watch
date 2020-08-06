// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieOverView from "./movie-overview.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieOverView component`, () => {
  test(`When Movie is correctly`, () => {
    const tree = renderer.create(
        <MovieOverView
          movie={MOVIES[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
