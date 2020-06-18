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
    const handleMovieDetailsOpen = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieDetailsOpen={handleMovieDetailsOpen}
          onCatalogGenreSwitchOver = {() => {}}
        />
    );

    main.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).map((movie) => movie.props().onClick());
    main.find(`.${MarkupElement.MOVIE_CARD_POSTER}`).map((movie) => movie.props().onClick());

    expect(handleMovieDetailsOpen.mock.calls.length).toBe(MOVIES.length * 2);
  });


  test(`Should all titles of genres be pressed`, () => {
    const handleCatalogGenreSwitchOver = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieDetailsOpen = {() => {}}
          onCatalogGenreSwitchOver = {handleCatalogGenreSwitchOver}
        />
    );

    main.find(`.${MarkupElement.GENRE_LINK}`).map((genre) => genre.props().onClick());

    expect(handleCatalogGenreSwitchOver.mock.calls.length).toBe(GENRES.length);
  });
});
