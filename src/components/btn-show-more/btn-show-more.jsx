import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class BtnShowMore extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSelect = this._handleSelect.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={this._handleSelect}
        >
          Show more
        </button>
      </div>
    );
  }


  /**
     * Метод, обспечивающий выполнение помощника для отрисовки дополнительных фильмов
     */
  _handleSelect() {
    this.props.onSelect();
  }
}


BtnShowMore.propTypes = {
  onSelect: PropTypes.func.isRequired
};


export default BtnShowMore;
