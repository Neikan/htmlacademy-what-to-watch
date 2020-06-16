import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";


const Movie = {
  ID: `m1`,
  TITLE: `Fantastic Beasts: The Crimes of Grindelwald`,
  POSTER: `fantastic-beasts-the-crimes-of-grindelwald`
};


describe(`MovieCard`, () => {
  test(`MovieCard component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<MovieCard
        key = {Movie.ID}
        title = {Movie.TITLE}
        poster = {Movie.POSTER}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
