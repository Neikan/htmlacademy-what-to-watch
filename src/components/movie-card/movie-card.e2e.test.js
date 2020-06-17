import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {MOVIES} from "./../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieCard component`, () => {
  const movieTitleClickHandler = jest.fn();

  test(`Should movie title be pressed`, () => {
    const movieCard = shallow(
        <MovieCard
          key = {MOVIES[0].id}
          title = {MOVIES[0].title}
          poster = {MOVIES[0].poster}
          onTitleClick = {movieTitleClickHandler}
        />
    );

    movieCard.find(`.small-movie-card__title`).props().onClick();

    expect(movieTitleClickHandler.mock.calls.length).toBe(1);
  });
});
