import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieCard component`, () => {
  const titleClickHandler = jest.fn();

  test(`Should movie title be pressed`, () => {
    const movieCard = shallow(
        <MovieCard
          key = {MOVIES[0].id}
          title = {MOVIES[0].title}
          poster = {MOVIES[0].poster}
          onTitleClick = {titleClickHandler}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).props().onClick();

    expect(titleClickHandler.mock.calls.length).toBe(1);
  });
});
