// Импорт библиотек
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {userType} from "../../props/prop-types";
import {Page} from "../../consts/common-data";


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
        <Link to={`/${Page.MY_LIST}`}>
          <img src={avatarUrl} alt={name} width="63" height="63" />
        </Link>
      </div>
    );
  }
}


UserBlockInfo.propTypes = {
  user: userType.isRequired
};


export default UserBlockInfo;
