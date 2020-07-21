import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieTab from "./movie-tab.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";
import {MovieTabList} from "../../consts/common-data.js";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieTab component`, () => {
  test(`Should tab be pressed`, () => {
    const handleTabSelect = jest.fn();

    const movieTab = shallow(
        <MovieTab
          tab={MovieTabList.DETAILS}
          selectedTab={MovieTabList.DETAILS}
          onTabSelect={handleTabSelect}
          isReviews={MOVIES[0].reviews.length > 0 ? true : false}
        />
    );

    movieTab.find(`.${MarkupElement.MOVIE_TAB}`).props().onClick();

    expect(handleTabSelect.mock.calls.length).toBe(1);
  });
});
