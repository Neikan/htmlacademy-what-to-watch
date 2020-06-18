import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogGenre from "./catalog-genre.jsx";
import {MarkupElement, GENRES} from "../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e CatalogGenre component`, () => {
  const handleCatalogGenreSwitchOver = jest.fn();

  test(`Should genre title be pressed`, () => {
    const genre = shallow(
        <CatalogGenre
          key = {GENRES[0].id}
          title = {GENRES[0].title}
          onCatalogGenreSwitchOver = {handleCatalogGenreSwitchOver}
        />
    );

    genre.find(`.${MarkupElement.GENRE_LINK}`).props().onClick();

    expect(handleCatalogGenreSwitchOver.mock.calls.length).toBe(1);
  });
});
