// Импорт библиотек
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

// Импорт типов, констант, утилит
import {AuthStatus, Page} from "../../consts/common-data.js";

// Импорт редьюсеров, селекторов
import {getAuthStatus} from "../../store/datum-user/selectors.js";


const PrivateRoute = (props) => {
  const {authStatus, exact, path, render} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (authStatus === AuthStatus.NO_AUTH) {
          routeProps.history.push(path);

          return <Redirect to={Page.LOGIN} />;
        }

        return render(routeProps);
      }}
    />
  );
};


PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,

  authStatus: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});


export default connect(mapStateToProps)(PrivateRoute);
