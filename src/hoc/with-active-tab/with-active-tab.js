import React, {PureComponent} from "react";
import {MovieTabList} from "../../consts/common-data.js";


const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedTab: MovieTabList.OVERVIEW,
      };

      this._handleTabSelect = this._handleTabSelect.bind(this);
    }


    /**
     * Метод, обеспечивающий отрисовку компонента
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


  return WithActiveTab;
};


export default withActiveTab;
