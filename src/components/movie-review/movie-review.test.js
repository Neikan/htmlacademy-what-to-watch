// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieReview from "./movie-review.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieReview component`, () => {
  test(`MovieReview component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MovieReview
          review={MOVIES[2].reviews[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
