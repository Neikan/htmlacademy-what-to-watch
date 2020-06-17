import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Promo, MOVIES} from "./../consts/test-data";


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<App
        promoTitle = {Promo.TITLE}
        promoGenre = {Promo.GENRE}
        promoDate = {Promo.DATE}
        movies = {MOVIES}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
