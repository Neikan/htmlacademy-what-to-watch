import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


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


describe(`Test Main component`, () => {
  test(`Main component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<Main
        promoTitle = {Promo.TITLE}
        promoGenre = {Promo.GENRE}
        promoDate = {Promo.DATE}
        movies = {MOVIES}
        onMovieTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
