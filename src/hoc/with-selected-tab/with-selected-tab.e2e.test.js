import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSelectedTab from "./with-selected-tab.js";
import {MovieTabList} from "../../consts/test-data.js";


configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withSelectedTab(MockComponent);


describe(`Test e2e withSelectedTab component`, () => {
  test(`Should change selected tab`, () => {
    const tree = shallow(
        <MockComponentWrapped
          selectedTab={MovieTabList.OVERVIEW}
          onTabSelect={() => {}}
        />
    );

    expect(tree.props().selectedTab).toEqual(MovieTabList.OVERVIEW);

    tree.props().onTabSelect(MovieTabList.DETAILS);
    expect(tree.props().selectedTab).toEqual(MovieTabList.DETAILS);

    tree.props().onTabSelect(MovieTabList.REVIEWS);
    expect(tree.props().selectedTab).toEqual(MovieTabList.REVIEWS);

    tree.props().onTabSelect(MovieTabList.OVERVIEW);
    expect(tree.props().selectedTab).toEqual(MovieTabList.OVERVIEW);
  });
});
