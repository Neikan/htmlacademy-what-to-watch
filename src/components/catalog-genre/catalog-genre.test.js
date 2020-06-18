import React from "react";
import renderer from "react-test-renderer";
import CatalogGenre from "./catalog-genre.jsx";
import {GENRES} from "../../consts/test-data";


describe(`Test CatalogGenre component`, () => {
  test(`Active CatalogGenre component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenre
        key = {GENRES[0].id}
        title = {GENRES[0].title}
        onCatalogGenreSwitchOver = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Default CatalogGenre component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenre
        key = {GENRES[1].id}
        title = {GENRES[1].title}
        onCatalogGenreSwitchOver = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
