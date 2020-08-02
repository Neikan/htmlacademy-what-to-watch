// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего перевод проигрывателя в полноэкранный режим
 */
class BtnFullScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSetFullScreen = this._handleSetFullScreen.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    return (
      <button type="button" className="player__full-screen"
        onClick={this._handleSetFullScreen}
      >
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    );
  }


  /**
   * Метод, обеспечивабщий перевод проигрывателя в полноэкранный режим
   */
  _handleSetFullScreen() {
    const {onSet} = this.props;

    onSet();
  }
}


BtnFullScreen.propTypes = {
  onSet: PropTypes.func.isRequired
};


export default BtnFullScreen;
