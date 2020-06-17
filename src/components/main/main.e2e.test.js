import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


configure({
  adapter: new Adapter(),
});


const Promo = {
  TITLE: `The Grand Budapest Hotel poster`,
  GENRE: `Drama`,
  DATE: 2014
};

const MOVIES = [
  {
    id: `mock-1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald`
  }, {
    id: `mock-2`,
    title: `Bohemian Rhapsody`,
    poster: `bohemian-rhapsody`
  }, {
    id: `mock-3`,
    title: `Macbeth`,
    poster: `macbeth`
  }
];


describe(`Test e2e Main component`, () => {
  test(`Should movie title be pressed`, () => {
    const promoTitleClickHandler = jest.fn();

    const main = shallow(
        <Main
          promoTitle = {Promo.TITLE}
          promoGenre = {Promo.GENRE}
          promoDate = {Promo.DATE}
          movies = {MOVIES}
          onMovieTitleClick={promoTitleClickHandler}
        />
    );

    main.find(`.movie-card__title`).props().onClick();

    expect(promoTitleClickHandler.mock.calls.length).toBe(1);
  });


  test(`Should all titles of movies be pressed`, () => {
    const moviesTitleClickHandler = jest.fn();

    const main = mount(
        <Main
          promoTitle = {Promo.TITLE}
          promoGenre = {Promo.GENRE}
          promoDate = {Promo.DATE}
          movies = {MOVIES}
          onMovieTitleClick={moviesTitleClickHandler}
        />
    );

    main.find(`.small-movie-card__title`).map((movieTitle) => movieTitle.props().onClick());

    expect(moviesTitleClickHandler.mock.calls.length).toBe(MOVIES.length);
  });
});
