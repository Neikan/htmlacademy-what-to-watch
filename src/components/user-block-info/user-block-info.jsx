// Импорт библиотек
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

// Импорт типов, констант, утилит
import {userType} from "../../props/prop-types";
import {Page} from "../../consts/common-data";


/**
 * Создание компонента, обеспечивающего отображение блока информации об авторизованном пользователе
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const UserBlockInfo = (props) => {
  const {avatarUrl, name} = props.user;

  return (
    <div className="user-block__avatar">
      <Link to={`/${Page.MY_LIST}`}>
        <img src={avatarUrl} alt={name} width="63" height="63" />
      </Link>
    </div>
  );
};


UserBlockInfo.propTypes = {
  user: userType.isRequired
};


export default UserBlockInfo;
