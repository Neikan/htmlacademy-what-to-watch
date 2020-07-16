import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {MOVIES} from "./../../consts/test-data";


describe(`Test MovieCard component`, () => {
  test(`MovieCard component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        movie={MOVIES[0]}
        onSelect={() => {}}
        onPlay={() => {}}
        onPlayingStop={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
