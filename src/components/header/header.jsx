// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Импорт компонентов
import LinKMoviePage from "../link-movie-page/link-movie-page.jsx";
import Logo from "./../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";

// Импорт типов, констант, утилит
import {userType, movieType} from "../../props/prop-types.js";
import {LogoPosition} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {getAuthStatus, getUserDatum} from "../../store/datum-user/selectors.js";


/**
 * Создание компонента, обеспечивающего отображение "шапки" приложения
 * @return {Object} созданный компонент
 */
class Header extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {authStatus, movie, user} = this.props;

    return (
      <header className="page-header movie-card__head">
        <Logo logoPosition={LogoPosition.HEADER} />

        {movie ? <LinKMoviePage movie={movie}/> : null}

        <UserBlock
          authStatus={authStatus}
          user={user}
        />
      </header>
    );
  }
}


Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  movie: movieType,
  user: userType.isRequired
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUserDatum(state)
});


export {Header};
export default connect(mapStateToProps)(Header);
