import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieReviews component`, () => {
  test(`MovieReviews component is created and rendered correctly (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <MovieReviews
          movie = {MOVIES[0]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieReviews component is created and rendered correctly when (reviews.length = 1)`, () => {
    const tree = renderer.create(
        <MovieReviews
          movie = {MOVIES[1]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieReviews component is created and rendered correctly when (reviews.length >= 2)`, () => {
    const tree = renderer.create(
        <MovieReviews
          movie = {MOVIES[2]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
