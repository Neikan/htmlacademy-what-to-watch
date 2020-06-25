import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieCard component`, () => {
  const handleMovieSelect = jest.fn();

  test(`Should movie title be pressed`, () => {
    const movieCard = shallow(
        <MovieCard
          id = {MOVIES[0].id}
          title = {MOVIES[0].title}
          cover = {MOVIES[0].cover}
          onMovieSelect = {handleMovieSelect}
          onMovieMouseOver={() => {}}
          onMovieMouseOut={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).props().onClick();

    expect(handleMovieSelect.mock.calls.length).toBe(1);
  });
});
