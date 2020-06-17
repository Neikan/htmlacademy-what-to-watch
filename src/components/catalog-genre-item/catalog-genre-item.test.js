import React from "react";
import renderer from "react-test-renderer";
import CatalogGenreItem from "./catalog-genre-item.jsx";
import {GENRES} from "./../../consts/test-data";


describe(`Test CatalogGenreItem component`, () => {
  test(`First CatalogGenreItem component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenreItem
        key = {GENRES[0].id}
        id = {GENRES[0].id}
        title = {GENRES[0].title}
        onTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`Second CatalogGenreItem component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<CatalogGenreItem
        key = {GENRES[1].id}
        id = {GENRES[1].id}
        title = {GENRES[1].title}
        onTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
