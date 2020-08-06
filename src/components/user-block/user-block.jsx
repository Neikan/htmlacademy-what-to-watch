// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import LinkSignIn from "../link-sign-in/link-sign-in.jsx";
import UserBlockInfo from "../user-block-info/user-block-info.jsx";

// Импорт типов, констант, утилит
import {movieType, userType} from "../../props/prop-types.js";
import {AuthStatus} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего отображение блока информации о пользователе
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const UserBlock = (props) => {
  const {authStatus, user} = props;

  return (
    <div className="user-block">
      {authStatus === AuthStatus.AUTH
        ? <UserBlockInfo user={user} />
        : <LinkSignIn />}
    </div>
  );
};


UserBlock.propTypes = {
  authStatus: PropTypes.string.isRequired,
  isNoSignIn: PropTypes.bool,
  movie: movieType,
  user: userType.isRequired
};


export default UserBlock;
