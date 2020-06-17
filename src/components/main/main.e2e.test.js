import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {MarkupElement, Promo, MOVIES, GENRES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e Main component`, () => {
  test(`Should movie title be pressed`, () => {
    const promoTitleClickHandler = jest.fn();

    const main = shallow(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieTitleClick={promoTitleClickHandler}
          onGenreTitleClick = {() => {}}
        />
    );

    main.find(`.${MarkupElement.PROMO_TITLE}`).props().onClick();

    expect(promoTitleClickHandler.mock.calls.length).toBe(1);
  });


  test(`Should all titles of movies be pressed`, () => {
    const moviesTitleClickHandler = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieTitleClick={moviesTitleClickHandler}
          onGenreTitleClick = {() => {}}
        />
    );

    main.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).map((movieTitle) => movieTitle.props().onClick());

    expect(moviesTitleClickHandler.mock.calls.length).toBe(MOVIES.length);
  });


  test(`Should all titles of genres be pressed`, () => {
    const genresTitleClickHandler = jest.fn();

    const main = mount(
        <Main
          promo = {Promo}
          movies = {MOVIES}
          genres = {GENRES}
          onMovieTitleClick = {() => {}}
          onGenreTitleClick = {genresTitleClickHandler}
        />
    );

    main.find(`.${MarkupElement.GENRE_LINK}`).map((movieTitle) => movieTitle.props().onClick());

    expect(genresTitleClickHandler.mock.calls.length).toBe(GENRES.length);
  });
});
