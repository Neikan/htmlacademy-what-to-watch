import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieDetails component`, () => {
  test(`When Movie is correctly`, () => {
    const tree = renderer.create(
        <MovieDetails
          movie = {MOVIES[0]}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`When Movie is undefined`, () => {
    const tree = renderer.create(
        <MovieDetails
          movie = {null}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
