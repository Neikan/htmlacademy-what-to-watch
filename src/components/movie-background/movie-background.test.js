// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieBackground from "./movie-background.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieBackground component`, () => {
  test(`MovieBackground component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MovieBackground
          poster={MOVIES[0].poster}
          title={MOVIES[0].title}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
