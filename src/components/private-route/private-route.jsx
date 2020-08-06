// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

// Импорт компонентов
import Loader from "../loader/loader.jsx";

// Импорт типов, констант, утилит
import {AuthStatus, Page} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {getAuthStatus} from "../../store/datum-user/selectors.js";
import {getIsLoadingMovies, getIsLoadingPromo} from "../../store/datum/selectors.js";


/**
 * Создание компонента, обспечивающего приватную маршрутизацию
 * @param {Object} props параметры
 * @return {Object} созданный компонент
 */
const PrivateRoute = (props) => {
  const {authStatus, exact, isLoadingMovies, isLoadingPromo, path, render} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (authStatus === AuthStatus.NO_AUTH) {
          return <Redirect to={`/${Page.LOGIN}`} />;
        }

        return isLoadingMovies || isLoadingPromo
          ? <Loader />
          : render(routeProps);
      }}
    />
  );
};


PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,

  authStatus: PropTypes.string.isRequired,
  isLoadingMovies: PropTypes.bool.isRequired,
  isLoadingPromo: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  isLoadingMovies: getIsLoadingMovies(state),
  isLoadingPromo: getIsLoadingPromo(state)
});


export default connect(mapStateToProps)(PrivateRoute);
