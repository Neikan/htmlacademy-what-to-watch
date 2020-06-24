import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PromoMovie, MOVIES, GENRES} from "./../../consts/test-data";


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<Main
        promo = {PromoMovie}
        movies = {MOVIES}
        genres = {GENRES}
        onMoviePlay = {() => {}}
        onMovieAddToList = {() => {}}
        onMovieSelect = {() => {}}
        onGenreSelect = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
