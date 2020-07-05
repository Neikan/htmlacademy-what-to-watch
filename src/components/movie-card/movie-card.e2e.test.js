import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieCard component`, () => {
  test(`Should movie title be pressed`, () => {
    const handleMovieSelectTitle = jest.fn();

    const movieCard = shallow(
        <MovieCard
          movie={MOVIES[0]}
          onMovieSelect={handleMovieSelectTitle}
          onMovieMouseEnter={() => {}}
          onMovieMouseLeave={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).props().onClick();

    expect(handleMovieSelectTitle.mock.calls.length).toBe(1);
  });


  test(`Should movie cover be pressed`, () => {
    const handleMovieSelectCover = jest.fn();

    const movieCard = shallow(
        <MovieCard
          movie={MOVIES[0]}
          onMovieSelect={handleMovieSelectCover}
          onMovieMouseEnter={() => {}}
          onMovieMouseLeave={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).props().onClick();

    expect(handleMovieSelectCover.mock.calls.length).toBe(1);
  });


  test(`Should movie hover`, () => {
    const handleMovieMouseEnter = jest.fn();
    const handleMovieMouseLeave = jest.fn();

    const movieCard = shallow(
        <MovieCard
          movie={MOVIES[0]}
          onMovieSelect={() => {}}
          onMovieMouseEnter={handleMovieMouseEnter}
          onMovieMouseLeave={handleMovieMouseLeave}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseEnter`);
    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseLeave`);

    expect(handleMovieMouseEnter.mock.calls.length).toBe(1);
    expect(handleMovieMouseLeave.mock.calls.length).toBe(1);
  });
});
