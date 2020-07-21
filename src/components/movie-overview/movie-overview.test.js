import React from "react";
import renderer from "react-test-renderer";
import MovieOverView from "./movie-overview.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieOverView component`, () => {
  test(`When Movie is correctly`, () => {
    const tree = renderer.create(
        <MovieOverView
          movie = {MOVIES[0]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`When Movie is undefined`, () => {
    const tree = renderer.create(
        <MovieOverView
          movie = {null}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
