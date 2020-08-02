// Импорт библиотек
import React, {PureComponent} from "react";

// Импорт типов, констант, утилит
import {userType} from "../../props/prop-types";


/**
 * Создание компонента, обеспечивающего отображение блока информации об авторизованном пользователе
 * @return {Object} созданный компонент
 */
class UserBlockInfo extends PureComponent {
  /**
   * Метод, обеспечивающий отображение компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {avatarUrl, name} = this.props.user;

    return (
      <div className="user-block__avatar">
        <img src={avatarUrl} alt={name} width="63" height="63"/>
      </div>
    );
  }
}


UserBlockInfo.propTypes = {
  user: userType.isRequired
};


export default UserBlockInfo;
