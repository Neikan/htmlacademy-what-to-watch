// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import history from '../../../../history.js';


/**
 * Создание компонента, обеспечивающего закрытие проигрывателя
 */
class BtnExit extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClose = this._handleClose.bind(this);
  }


  /**
   * Метод, обеспечивающий отображение компонента
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
   * Метод, обеспечивающий закрытие проигрывателя и возврат на предыдщую с
   */
  _handleClose() {
    const {onClose} = this.props;

    history.goBack();

    onClose();
  }
}


BtnExit.propTypes = {
  onClose: PropTypes.func.isRequired
};


export default BtnExit;
