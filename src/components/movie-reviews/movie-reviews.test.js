// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieReviews from "./movie-reviews.jsx";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieReviews component`, () => {
  test(`MovieReviews component is created and rendered correctly (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <MovieReviews
          reviews={MOVIES[0].reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieReviews component is created and rendered correctly when (reviews.length = 1)`, () => {
    const tree = renderer.create(
        <MovieReviews
          reviews={MOVIES[1].reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieReviews component is created and rendered correctly when (reviews.length >= 2)`, () => {
    const tree = renderer.create(
        <MovieReviews
          reviews={MOVIES[2].reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
