import React from "react";
import renderer from "react-test-renderer";
import MoviesByGenre from "./movies-by-genre.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesByGenre component`, () => {
  test(`MoviesByGenre component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <MoviesByGenre
          movies = {MOVIES}
          onMovieSelect = {() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
