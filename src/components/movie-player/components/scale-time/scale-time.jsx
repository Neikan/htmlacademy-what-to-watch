import React from "react";
import {timeType} from "../../../../props/prop-types";


const getStyle = (current, duration) => `${((current * 100) / duration)}%`;


const ScaleTime = (props) => {
  const {time} = props;
  const {duration, current, left} = time;

  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={current} max={duration} />
        <div className="player__toggler"
          style={{left: getStyle(current, duration)}}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">{left}</div>
    </>
  );
};


ScaleTime.propTypes = {
  time: timeType.isRequired
};


export default ScaleTime;
