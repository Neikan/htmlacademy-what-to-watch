import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {MarkupElement, MOVIES} from "./../../consts/test-data";


configure({
  adapter: new Adapter(),
});


describe(`Test e2e MovieCard component`, () => {
  test(`Should movie title be pressed`, () => {
    const handleTitleSelect = jest.fn();

    const movieCard = shallow(
        <MovieCard
          movie={MOVIES[0]}
          isPlaying={false}
          onSelect={handleTitleSelect}
          onPlay={() => {}}
          onStop={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD_TITLE}`).props().onClick();

    expect(handleTitleSelect.mock.calls.length).toBe(1);
  });


  test(`Should movie cover be pressed`, () => {
    const handleCoverSelect = jest.fn();

    const movieCard = shallow(
        <MovieCard
          movie={MOVIES[0]}
          isPlaying={false}
          onSelect={handleCoverSelect}
          onPlay={() => {}}
          onStop={() => {}}
        />
    );

    movieCard.find(`.${MarkupElement.MOVIE_CARD}`).props().onClick();

    expect(handleCoverSelect.mock.calls.length).toBe(1);
  });


  // test(`Should movie hover`, () => {
  //   const handlePlay = jest.fn();
  //   const handlePlayingStop = jest.fn();

  //   const movieCard = shallow(
  //       <MovieCard
  //         movie={MOVIES[0]}
  //         isPlaying={true}
  //         onSelect={() => {}}
  //         onPlay={handlePlay}
  //         onPlayingStop={handlePlayingStop}
  //       />
  //   );

  //   movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseEnter`);
  //   movieCard.find(`.${MarkupElement.MOVIE_CARD}`).simulate(`mouseLeave`);

  //   expect(handlePlay.mock.calls.length).toBe(1);
  //   expect(handlePlayingStop.mock.calls.length).toBe(1);
  // });
});
