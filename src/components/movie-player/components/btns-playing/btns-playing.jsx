// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import BtnPause from "../btn-pause/btn-pause.jsx";
import BtnPlay from "../btn-play/btn-play.jsx";


/**
 * Создание компонента, обеспечивающего переход проигрывателя
 * между режимами удержания и воспроизведения
 */
class BtnsPlaying extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChangePlaying = this._handleChangePlaying.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {isPlaying} = this.props;

    return (
      <button type="button" className="player__play"
        onClick={this._handleChangePlaying}
      >
        {isPlaying ? <BtnPause /> : <BtnPlay />}
      </button>
    );
  }


  /**
   * Метод, обеспечивающий управление кнопками Play и Pause проигрывателя фильма
   */
  _handleChangePlaying() {
    this.props.onChangePlaying();
  }
}


BtnsPlaying.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onChangePlaying: PropTypes.func.isRequired
};


export default BtnsPlaying;
