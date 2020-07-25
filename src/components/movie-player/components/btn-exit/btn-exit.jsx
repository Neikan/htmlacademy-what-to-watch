import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class BtnExit extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClose = this._handleClose.bind(this);
  }

  render() {
    return (
      <button type="button" className="player__exit"
        onClick={this._handleClose}
      >
        Exit
      </button>
    );
  }

  _handleClose() {
    this.props.onClose();
  }
}


BtnExit.propTypes = {
  onClose: PropTypes.func.isRequired
};


export default BtnExit;
