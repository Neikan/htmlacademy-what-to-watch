import React from "react";
import {configure, shallow} from "enzyme";
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
    const movieTitleClickHandler = jest.fn();

    const main = shallow(
        <Main
          promoTitle = {Promo.TITLE}
          promoGenre = {Promo.GENRE}
          promoDate = {Promo.DATE}
          movies = {MOVIES}
          onMovieTitleClick={movieTitleClickHandler}
        />
    );


    const movieTitle = main.find(`.movie-card__title`);

    movieTitle.props().onClick();
  });
});
