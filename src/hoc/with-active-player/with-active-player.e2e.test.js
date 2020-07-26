// Импорт библиотек
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";

// Импорт типов, констант, утилит
import {MOVIES} from "../../consts/test-data.js";

// Импорт хоков
import withActivePlayer from "./with-active-player.js";


configure({
  adapter: new Adapter()
});


const MockComponent = () => <div />;
const MockComponentWrapped = withActivePlayer(MockComponent);


describe(`Test e2e withActivePlayer component`, () => {
  test(`Should isPlaying be change`, () => {
    const tree = shallow(
        <MockComponentWrapped
          movie={MOVIES[0]}
          onPlay={() => {}}
          onPlayingStop={() => {}}
        />
    );

    expect(tree.props().isPlaying).toEqual(false);

    tree.props().onPlay(MOVIES[0].id);
    expect(tree.props().isPlaying).toEqual(true);

    tree.props().onStop();
    expect(tree.props().isPlaying).toEqual(false);
  });
});
