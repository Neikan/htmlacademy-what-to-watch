// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import BtnShowMore from "./btn-show-more";


describe(`Test BtnShowMore component`, () => {
  test(`BtnShowMore component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnShowMore
          onShowMore={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
