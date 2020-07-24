import React from "react";
import renderer from "react-test-renderer";
import Promo from "./promo.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test Promo component`, () => {
  test(`Promo component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <Promo
          movie={MOVIES[0]}
          onPlay={() => {}}
          onAdd={() => {}}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
