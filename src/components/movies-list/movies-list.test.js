import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MoviesList component`, () => {
  test(`MoviesList component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<MoviesList
        movies = {MOVIES}
        onMovieSelect={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
