import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {MOVIES} from "./../../consts/test-data";


describe(`Test MovieCard component`, () => {
  test(`Render correctly when isPlaying is true`, () => {
    const tree = renderer.create(
        <MovieCard
          movie={MOVIES[0]}
          isPlaying={true}
          onSelect={() => {}}
          onPlay={() => {}}
          onStop={() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Render correctly when isPlaying is false`, () => {
    const tree = renderer.create(
        <MovieCard
          movie={MOVIES[0]}
          isPlaying={false}
          onSelect={() => {}}
          onPlay={() => {}}
          onStop={() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
