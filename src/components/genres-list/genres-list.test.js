import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import {GENRES} from "../../consts/test-data.js";


describe(`Test GenresList component`, () => {
  test(`GenresList component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<GenresList
        genres = {GENRES}
        onGenreSelect = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
