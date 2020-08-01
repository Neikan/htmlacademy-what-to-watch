// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import InputStar from "./input-star.jsx";
import { Rating } from "../../../../consts/common-data.js";


describe(`Test InputStar component`, () => {
  test(`InputStar component is created and rendered correctly when checked`, () => {
    const countStar = Rating.DEFAULT;

    const tree = renderer.create(
        <InputStar
          checked={Rating.DEFAULT === countStar}
          countStar={countStar}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`InputStar component is created and rendered correctly when non-cheked`, () => {
    const countStar = 1;

    const tree = renderer.create(
        <InputStar
          checked={Rating.DEFAULT === countStar}
          countStar={countStar}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
