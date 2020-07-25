// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";

// Импорт компонентов
import GenresList from "./genres-list.jsx";

// Импорт типов, констант, утилит
import {MarkupElement, GENRES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e GenresList component`, () => {
  test(`Should all titles of movies be pressed`, () => {
    const handleGenreSelect = jest.fn();

    const genresList = mount(
        <GenresList
          genres={GENRES}
          onGenreSelect={handleGenreSelect}
        />
    );

    genresList.find(`.${MarkupElement.GENRE_LINK}`).map((genre) => genre.props().onClick());

    expect(handleGenreSelect.mock.calls.length).toBe(GENRES.length);
  });
});
