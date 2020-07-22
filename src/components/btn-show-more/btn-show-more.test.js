import React from "react";
import renderer from "react-test-renderer";
import BtnShowMore from "./btn-show-more";


describe(`Test BtnShowMore component`, () => {
  test(`BtnShowMore component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <BtnShowMore
          onSelect={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
