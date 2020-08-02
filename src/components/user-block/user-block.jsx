// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import LinkSignIn from "../link-sign-in/link-sign-in.jsx";
import UserBlockInfo from "../user-block-info/user-block-info.jsx";

// Импорт типов, констант, утилит
import {movieType, userType} from "../../props/prop-types.js";
import {AuthStatus} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение блока информации о пользователе
 * @return {Object} созданный компонент
 */
class UserBlock extends PureComponent {
  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {authStatus, user} = this.props;

    return (
      <div className="user-block">
        {authStatus === AuthStatus.AUTH
          ? <UserBlockInfo user={user} />
          : <LinkSignIn />}
      </div>
    );
  }
}


UserBlock.propTypes = {
  authStatus: PropTypes.string.isRequired,
  isNoSignIn: PropTypes.bool,
  movie: movieType,
  user: userType.isRequired
};


export default UserBlock;
