// Импорт библиотек
import React from "react";

// Импорт типов, констант, утилит
import {timeType} from "../../../../props/prop-types";
import {getTimeProgress} from "../../../../utils/common";


/**
 * Создание компонента, обеспечивающего отображение прогресса воспроизведения
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const ScaleTime = (props) => {
  const {time} = props;
  const {duration, current, left} = time;

  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={current} max={duration} />
        <div className="player__toggler"
          style={{left: getTimeProgress(current, duration)}}
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
