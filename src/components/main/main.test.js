import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Promo, MOVIES, GENRES} from "./../../consts/test-data";


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<Main
        promo = {Promo}
        movies = {MOVIES}
        genres = {GENRES}
        onMovieTitleClick = {() => {}}
        onGenreTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
