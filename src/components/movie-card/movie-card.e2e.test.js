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
          id = {MOVIES[0].id}
          title = {MOVIES[0].title}
          cover = {MOVIES[0].cover}
          onMovieSelect = {handleMovieSelectTitle}
          onMovieMouseOver={() => {}}
          onMovieMouseOut={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).props().onClick();

    expect(handleMovieSelectTitle.mock.calls.length).toBe(1);
  });


  test(`Should movie cover be pressed`, () => {
    const handleMovieSelectCover = jest.fn();

    const movieCard = shallow(
        <MovieCard
          id = {MOVIES[0].id}
          title = {MOVIES[0].title}
          cover = {MOVIES[0].cover}
          onMovieSelect = {handleMovieSelectCover}
          onMovieMouseOver={() => {}}
          onMovieMouseOut={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_COVER}`).props().onClick();

    expect(handleMovieSelectCover.mock.calls.length).toBe(1);
  });


  test(`Should movie hover`, () => {
    const handleMovieMouseOver = jest.fn();
    const handleMovieMouseOut = jest.fn();

    const movieCard = shallow(
        <MovieCard
          id = {MOVIES[0].id}
          title = {MOVIES[0].title}
          cover = {MOVIES[0].cover}
          onMovieSelect = {() => {}}
          onMovieMouseOver={handleMovieMouseOver}
          onMovieMouseOut={handleMovieMouseOut}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseOver`);
    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseOut`);

    expect(handleMovieMouseOver.mock.calls.length).toBe(1);
    expect(handleMovieMouseOut.mock.calls.length).toBe(1);
  });
});
