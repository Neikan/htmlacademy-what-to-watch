// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


/**
 * Создание компонента, обеспечивающего закрытие проигрывателя
 */
class BtnExit extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClose = this._handleClose.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    return (
      <button type="button" className="player__exit"
        onClick={this._handleClose}
      >
        Exit
      </button>
    );
  }


  /**
   * Метод, обеспечивающий закрытие проигрывателя
   */
  _handleClose() {
    this.props.onClose();
  }
}


BtnExit.propTypes = {
  onClose: PropTypes.func.isRequired
};


export default BtnExit;
