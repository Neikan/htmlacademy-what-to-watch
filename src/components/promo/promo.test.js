import React from "react";
import renderer from "react-test-renderer";
import Promo from "./promo.jsx";
import {PromoMovie} from "./../../consts/test-data";


describe(`Test Promo component`, () => {
  test(`Promo component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<Promo
        promo = {PromoMovie}
        onPlay = {() => {}}
        onAdd = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
