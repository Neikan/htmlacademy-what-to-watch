import React from 'react';
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {MOVIES} from "../../consts/test-data.js";


describe(`Test VideoPlayer component`, () => {
  test(`VideoPlayer component is created and rendered correctly`, () => {
    const tree = renderer.create(
        <VideoPlayer muted
          isPlaying={false}
          src={MOVIES[0].preview}
          cover={MOVIES[0].cover}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
