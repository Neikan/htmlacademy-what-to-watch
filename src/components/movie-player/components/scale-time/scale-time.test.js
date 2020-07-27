// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import ScaleTime from "./scale-time.jsx";

// Импорт типов, констант, утилит
import {Time} from "../../../../consts/test-data.js";


describe(`Test ScaleTime component`, () => {
  test(`ScaleTime component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <ScaleTime
          time={Time}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
