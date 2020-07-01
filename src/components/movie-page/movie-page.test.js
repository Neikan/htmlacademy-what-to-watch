import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviePage component`, () => {
  test(`MoviePage component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviePage
          movie = {MOVIES[0]}
          movies = {MOVIES}
          onMovieSelect = {() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
