// Импорт библиотек
import React, {PureComponent} from "react";

// Импорт типов, констант, утилит
import {movieType} from "../../props/prop-types.js";
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
        selectedTab: MovieTabList.OVERVIEW
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
     * Метод, обеспечивающий сброс вкладки при переключении фильма
     * @param {Object} prevProps параметры
     */
    componentDidUpdate(prevProps) {
      if (prevProps.movie !== this.props.movie) {
        this.setState({
          selectedTab: MovieTabList.OVERVIEW
        });
      }
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


  WithSelectedTab.propTypes = {
    movie: movieType.isRequired
  };


  return WithSelectedTab;
};


export default withSelectedTab;
