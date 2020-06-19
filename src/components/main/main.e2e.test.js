import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {MarkupElement, Promo, MOVIES, GENRES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e Main component`, () => {
  test(`Should all titles of movies be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieSelect={handleMovieSelect}
          onGenreSelect = {() => {}}
        />
    );

    main.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).map((movie) => movie.props().onClick());
    main.find(`.${MarkupElement.MOVIE_CARD_POSTER}`).map((movie) => movie.props().onClick());

    expect(handleMovieSelect.mock.calls.length).toBe(MOVIES.length * 2);
  });


  test(`Should all titles of genres be pressed`, () => {
    const handleGenreSelect = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieSelect = {() => {}}
          onGenreSelect = {handleGenreSelect}
        />
    );

    main.find(`.${MarkupElement.GENRE_LINK}`).map((genre) => genre.props().onClick());

    expect(handleGenreSelect.mock.calls.length).toBe(GENRES.length);
  });
});
