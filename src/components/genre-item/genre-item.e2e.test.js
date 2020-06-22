import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreItem from "./genre-item.jsx";
import {MarkupElement, GENRES} from "../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e GenreItem component`, () => {
  const handleGenreSelect = jest.fn();

  test(`Should genre title be pressed`, () => {
    const genre = shallow(
        <GenreItem
          title = {GENRES[0].title}
          isActive = {GENRES[0].isActive}
          onGenreSelect = {handleGenreSelect}
        />
    );

    genre.find(`.${MarkupElement.GENRE_LINK}`).props().onClick();

    expect(handleGenreSelect.mock.calls.length).toBe(1);
  });
});
