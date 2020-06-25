import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {MOVIES} from "./../../consts/test-data";


describe(`Test MovieCard component`, () => {
  test(`MovieCard component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        id = {MOVIES[0].id}
        title = {MOVIES[0].title}
        cover = {MOVIES[0].cover}
        onMovieSelect = {() => {}}
        onMovieMouseOver={() => {}}
        onMovieMouseOut={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
