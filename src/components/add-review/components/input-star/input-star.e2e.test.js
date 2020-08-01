// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";

// Импорт компонентов
import InputStar from "./input-star.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, Rating} from "../../../../consts/test-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e InputStar component`, () => {
  test(`Should InputStar be changed`, () => {
    const handleChange = jest.fn();
    const countStar = 1;

    const inputStar = mount(
        <InputStar
          checked={true}
          countStar={Rating.DEFAULT}
          onChange={handleChange}
        />
    );

    expect(inputStar.props().countStar).toEqual(Rating.DEFAULT);

    inputStar.props().countStar = countStar;
    inputStar.props().onChange();

    expect(handleChange.mock.calls.length).toBe(1);
    expect(inputStar.props().countStar).toEqual(countStar);
    expect(inputStar.find(`.${MarkupElement.REVIEW_RATING_INPUT}`).props().value).toEqual(Rating.DEFAULT);
  });
});
