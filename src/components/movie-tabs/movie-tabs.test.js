// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";

// Импорт компонентов
import MovieTabs from "./movie-tabs.jsx";

// Импорт типов, констант, утилит
import {MovieTabList, MOVIES} from "../../consts/test-data.js";


describe(`Test MovieTabs component`, () => {
  test(`MovieTabs component is created and rendered correctly when (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[0].reviews.length > 0 ? true : false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTabs component is created and rendered correctly when (reviews.length = 1)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[1].reviews.length > 0 ? true : false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTabs component is created and rendered correctly when (reviews.length >= 2)`, () => {
    const tree = renderer.create(
        <MovieTabs
          tabs={MovieTabList}
          selectedTab={``}
          onTabSelect={() => {}}
          isReviews={MOVIES[2].reviews.length > 0 ? true : false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
