import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";


configure({
  adapter: new Adapter(),
});


const Movie = {
  ID: `mock-1`,
  TITLE: `Fantastic Beasts: The Crimes of Grindelwald`,
  POSTER: `fantastic-beasts-the-crimes-of-grindelwald`
};


describe(`Test e2e MovieCard component`, () => {
  const movieTitleClickHandler = jest.fn();

  test(`Should movie title be pressed`, () => {
    const movieCard = shallow(
        <MovieCard
          key = {Movie.ID}
          title = {Movie.TITLE}
          poster = {Movie.POSTER}
          onTitleClick = {movieTitleClickHandler}
        />
    );

    const movieTitle = movieCard.find(`.small-movie-card__title`);

    movieTitle.props().onClick();

    expect(movieTitleClickHandler.mock.calls.length).toBe(1);
  });
});
