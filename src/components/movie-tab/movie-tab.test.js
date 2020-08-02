// Импорт библиотек
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

// Импорт компонентов
import MovieTab from "./movie-tab.jsx";

// Импорт типов, констант, утилит
import {MovieTabList, MOVIES} from "../../consts/test-data.js";


describe(`Test MovieTab component`, () => {
  test(`MovieTab component is created and rendered correctly when it is selected`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieTab
            tab={MovieTabList.DETAILS}
            selectedTab={MovieTabList.DETAILS}
            onTabSelect={() => {}}
            isReviews={MOVIES[0].reviews.length > 0 ? true : false}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTab component is created and rendered correctly when it is not selected)`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieTab
            tab={MovieTabList.OVERVIEW}
            selectedTab={``}
            onTabSelect={() => {}}
            isReviews={MOVIES[1].reviews.length > 0 ? true : false}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`MovieTab component is created and rendered correctly when (reviews.length = 0)`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MovieTab
            tab={MovieTabList.REVIEWS}
            selectedTab={``}
            onTabSelect={() => {}}
            isReviews={MOVIES[0].reviews.length > 0 ? true : false}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
