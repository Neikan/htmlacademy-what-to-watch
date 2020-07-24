import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {MOVIES, GENRES} from "./../../consts/test-data";


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Main
          promoMovie={MOVIES[0]}
          movies={MOVIES}
          genres={GENRES}
          countShowedMovies={1}
          onMoviePlay={() => {}}
          onMovieAddToList={() => {}}
          onMovieSelect={() => {}}
          onGenreSelect={() => {}}
          onBtnMoreSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
