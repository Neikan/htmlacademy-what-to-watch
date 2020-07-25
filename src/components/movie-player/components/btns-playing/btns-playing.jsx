import React from "react";
import PropTypes from "prop-types";
import BtnPause from "../btn-pause/btn-pause.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";


const BtnsPlaying = (props) => {
  const {isPlaying, onPlayingChange} = props;

  return (
    <button type="button" className="player__play"
      onClick={() => onPlayingChange()}
    >
      {isPlaying ? <BtnPause /> : <BtnPlay />}
    </button>
  );
};


BtnsPlaying.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayingChange: PropTypes.func.isRequired
};


export default BtnsPlaying;
