import React from "react";
import renderer from "react-test-renderer";
import CatalogGenre from "./catalog-genre.jsx";
import {GENRES} from "../../consts/test-data";


describe(`Test CatalogGenre component`, () => {
  test(`Active CatalogGenre component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenre
        title = {GENRES[0].title}
        isActive = {GENRES[0].isActive}
        onGenreSelect = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Default CatalogGenre component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenre
        title = {GENRES[1].title}
        isActive = {GENRES[1].isActive}
        onGenreSelect = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
