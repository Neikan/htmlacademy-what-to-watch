// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import InputStar from "./input-star.jsx";


describe(`Test InputStar component`, () => {
  test(`InputStar component is created and rendered correctly when checked`, () => {
    const tree = renderer.create(
        <InputStar
          checked={false}
          countStar={1}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`InputStar component is created and rendered correctly when non-cheked`, () => {
    const tree = renderer.create(
        <InputStar
          checked={true}
          countStar={1}
          onChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
