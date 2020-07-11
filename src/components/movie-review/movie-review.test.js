import React from "react";
import renderer from "react-test-renderer";
import {MOVIES} from "../../consts/test-data.js";
import MovieReview from "./movie-review.jsx";


describe(`Test MovieReview component`, () => {
  test(`MovieReview component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MovieReview
          review = {MOVIES[2].reviews[0]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
