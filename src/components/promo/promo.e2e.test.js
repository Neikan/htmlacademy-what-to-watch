import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Promo from "./promo.jsx";
import {PromoMovie, MarkupElement} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e Promo component`, () => {
  test(`Should 'play'-button for promo-movie be pressed`, () => {
    const handleMoviePlay = jest.fn();

    const promo = shallow(
        <Promo
          promo = {PromoMovie}
          onMoviePlay = {handleMoviePlay}
          onMovieAddToList = {() => {}}
        />
    );

    promo.find(`.${MarkupElement.PROMO_BTN_PLAY}`).props().onClick();

    expect(handleMoviePlay.mock.calls.length).toBe(1);
  });


  test(`Should 'add to list'-button for promo-movie be pressed`, () => {
    const handleMovieAddToList = jest.fn();

    const promo = shallow(
        <Promo
          promo = {PromoMovie}
          onMoviePlay = {() => {}}
          onMovieAddToList = {handleMovieAddToList}
        />
    );

    promo.find(`.${MarkupElement.PROMO_BTN_ADD_TO_LIST}`).props().onClick();

    expect(handleMovieAddToList.mock.calls.length).toBe(1);
  });
});
