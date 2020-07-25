// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт компонентов
import Promo from "./promo.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e Promo component`, () => {
  test(`Should 'play'-button for promo-movie be pressed`, () => {
    const handleChangePlaying = jest.fn();

    const promo = shallow(
        <Promo
          movie={MOVIES[0]}
          onChangePlaying={handleChangePlaying}
          onAdd={() => {}}
          onSelect={() => {}}
        />
    );

    promo.find(`.${MarkupElement.PROMO_BTN_PLAY}`).props().onClick();

    expect(handleChangePlaying.mock.calls.length).toBe(1);
  });


  test(`Should 'add to list'-button for promo-movie be pressed`, () => {
    const handleMovieAddToList = jest.fn();

    const promo = shallow(
        <Promo
          movie={MOVIES[0]}
          onChangePlaying={() => {}}
          onAdd={handleMovieAddToList}
          onSelect={() => {}}
        />
    );

    promo.find(`.${MarkupElement.PROMO_BTN_ADD_TO_LIST}`).props().onClick();

    expect(handleMovieAddToList.mock.calls.length).toBe(1);
  });


  test(`Should poster for promo-movie be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const promo = shallow(
        <Promo
          movie={MOVIES[0]}
          onAdd={() => {}}
          onChangePlaying={() => {}}
          onSelect={handleMovieSelect}
        />
    );

    promo.find(`.${MarkupElement.PROMO_POSTER}`).props().onClick();

    expect(handleMovieSelect.mock.calls.length).toBe(1);
  });


  test(`Should title for promo-movie be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const promo = shallow(
        <Promo
          movie={MOVIES[0]}
          onAdd={() => {}}
          onChangePlaying={() => {}}
          onSelect={handleMovieSelect}
        />
    );

    promo.find(`.${MarkupElement.PROMO_TITLE}`).props().onClick();

    expect(handleMovieSelect.mock.calls.length).toBe(1);
  });
});
