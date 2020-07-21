import React from "react";
import renderer from "react-test-renderer";
import MovieTab from "./movie-tab.jsx";
import {MovieTabList} from "../../consts/common-data.js";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test MovieTab component`, () => {
  test(`MovieTab component is created and rendered correctly when it is selected`, () => {
    const tree = renderer.create(
        <MovieTab
          tab={MovieTabList.DETAILS}
          selectedTab={MovieTabList.DETAILS}
          onTabSelect={() => {}}
          isReviews={MOVIES[0].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTab component is created and rendered correctly when it is not selected)`, () => {
    const tree = renderer.create(
        <MovieTab
          tab={MovieTabList.OVERVIEW}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[1].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTab component is created and rendered correctly when (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <MovieTab
          tab={MovieTabList.REVIEWS}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[0].reviews.length > 0 ? true : false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
