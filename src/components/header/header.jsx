// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Импорт компонентов
import Logo from "./../logo/logo.jsx";

// Импорт типов, констант, утилит
import {userType, movieType} from "../../props/prop-types.js";
import {AuthStatus, LogoPosition, Page} from "../../consts/common-data.js";

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
    return (
      <header className="page-header movie-card__head">
        <Logo logoPosition={LogoPosition.HEADER} />

        {this.props.selectedMovie ? this._renderNavLink() : null}
        {this._renderUserBlock()}
      </header>
    );
  }


  /**
   * Метод, обеспечивабщий отрисовку блока информации о пользователе
   * @return {Object} блок информации
   */
  _renderUserBlock() {
    const {authStatus, user} = this.props;

    return (
      <div className="user-block">
        {authStatus === AuthStatus.AUTH
          ? this._renderAvatar(user.avatarUrl)
          : this._renderNoAvatar()}
      </div>
    );
  }


  /**
   * Метод, обеспечивабщий отрисовку аватара авторизованного пользователя
   * @return {Object} блок с аватаром бользователя
   */
  _renderAvatar() {
    const {avatarUrl, name} = this.props.user;

    return (
      <div className="user-block__avatar">
        <img src={avatarUrl} alt={name} width="63" height="63"/>
      </div>
    );
  }


  /**
   * Метод, обеспечивабщий отрисовку блока при отсутствии авторизации
   * @return {Object} блок с ссылкой на страницу авторизации
   */
  _renderNoAvatar() {
    return <a href={Page.LOGIN} className="user-block__link">Sign in</a>;
  }


  /**
   * Метод, обеспечивабщий отрисовку навигации для страницы отправки отзыва
   * @return {Object} блок с ссылкой на страницу фильма
   */
  _renderNavLink() {
    const {id, title} = this.props.selectedMovie;

    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href={`${Page.MOVIE}/${id}`} className="breadcrumbs__link">{title}</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    );
  }
}


Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  isNoSignIn: PropTypes.bool,
  selectedMovie: movieType,
  user: userType.isRequired
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUserDatum(state)
});


export {Header};
export default connect(mapStateToProps)(Header);
