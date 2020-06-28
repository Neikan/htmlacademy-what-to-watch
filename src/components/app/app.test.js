import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PromoMovie, MOVIES, GENRES} from "./../../consts/test-data";


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<App
        promo = {PromoMovie}
        movies = {MOVIES}
        genres = {GENRES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
