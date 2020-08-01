// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";

// Импорт компонентов
import InputStar from "./input-star.jsx";

// Импорт типов, констант, утилит
import {MarkupElement} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e InputStar component`, () => {
  test(`Should InputStar be changed`, () => {
    const handleChange = jest.fn();
    const star = 1;

    const inputStar = mount(
        <InputStar
          checked={false}
          countStar={star}
          onChange={handleChange}
        />
    );

    const input = inputStar.find(`.${MarkupElement.REVIEW_RATING_INPUT}`);

    expect(input.props().value).toEqual(star);
  });
});
