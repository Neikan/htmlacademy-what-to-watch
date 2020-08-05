// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import {Router} from "react-router-dom";
import history from "../../history.js";

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
        <Router history={history}>
          <GenresList
            genres={GENRES}
            onGenreSelect={handleGenreSelect}
          />
        </Router>
    );

    genresList.find(`.${MarkupElement.GENRE_LINK}`).map(
        (genre) => genre.simulate(`click`, {
          preventDefault() {}
        }));

    expect(handleGenreSelect.mock.calls.length).toBe(9);
  });
});
