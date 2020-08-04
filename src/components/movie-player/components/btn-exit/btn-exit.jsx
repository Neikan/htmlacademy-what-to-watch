// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import history from '../../../../history.js';

// Импорт типов, констант, утилит
import {Page} from "../../../../consts/common-data.js";


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
    const {id, onClose} = this.props;

    history.push(`/${Page.MOVIE}/${id}`);

    onClose();
  }
}


BtnExit.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};


export default BtnExit;
