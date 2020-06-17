import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogGenreItem from "./catalog-genre-item.jsx";
import {MarkupElement, GENRES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e CatalogGenreItem component`, () => {
  const titleClickHandler = jest.fn();

  test(`Should genre title be pressed`, () => {
    const genre = shallow(
        <CatalogGenreItem
          key = {GENRES[0].id}
          id = {GENRES[0].id}
          title = {GENRES[0].title}
          onTitleClick = {titleClickHandler}
        />
    );

    genre.find(`.${MarkupElement.GENRE_LINK}`).props().onClick();

    expect(titleClickHandler.mock.calls.length).toBe(1);
  });
});
