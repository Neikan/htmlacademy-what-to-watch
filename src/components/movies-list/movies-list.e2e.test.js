import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviesList from "./movies-list.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MoviesList component`, () => {
  test(`Should all titles of movies be pressed`, () => {
    const handleMovieSelect = jest.fn();

    const moviesList = mount(
        <MoviesList
          movies = {MOVIES}
          onMovieSelect={handleMovieSelect}
        />
    );

    moviesList.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).map((movie) => movie.props().onClick());
    moviesList.find(`.${MarkupElement.MOVIE_CARD_COVER}`).map((movie) => movie.props().onClick());

    expect(handleMovieSelect.mock.calls.length).toBe(MOVIES.length * 2);
  });
});
