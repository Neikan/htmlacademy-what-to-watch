// Импорт библиотек
import React, {PureComponent} from "react";

// Импорт типов, констант, утилит
import {MovieTabList} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего фиксацию активной вкладки для фильма
 * @param {Object} Component "оборачиваемый" компонент
 * @return {Object} созданный компонент
 */
const withSelectedTab = (Component) => {
  class WithSelectedTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedTab: MovieTabList.OVERVIEW,
      };

      this._handleTabSelect = this._handleTabSelect.bind(this);
    }


    /**
     * Метод, обеспечивающий отображение компонента
     * @return {Object} созданный компонент
     */
    render() {
      return (
        <Component
          {...this.props}
          selectedTab={this.state.selectedTab}
          onTabSelect={this._handleTabSelect}
        />
      );
    }


    /**
     * Метод, обеспечивающий обновление состояния в соответствии с выбранной вкладкой
     * @param {string} tab выбранная вкладка
     */
    _handleTabSelect(tab) {
      this.setState({
        selectedTab: tab
      });
    }
  }


  return WithSelectedTab;
};


export default withSelectedTab;
