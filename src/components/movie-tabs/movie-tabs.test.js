import React from "react";
import renderer from "react-test-renderer";
import MovieTabs from "./movie-tabs.jsx";
import {MovieTabList} from "../../consts/common-data.js";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieTabs component`, () => {
  test(`MovieTabs component is created and rendered correctly when (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[0].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTabs component is created and rendered correctly when (reviews.length = 1)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[1].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTabs component is created and rendered correctly when (reviews.length >= 2)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[2].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
