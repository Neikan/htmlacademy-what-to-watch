import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesList component`, () => {
  test(`When Movies is correctly`, () => {
    const tree = renderer.create(
        <MoviesList
          movies={MOVIES}
          countShowedMovies={1}
          onMovieSelect={() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
