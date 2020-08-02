// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import validator from "email-validator";


const withErrors = (Component) => {
  class WithErrors extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorLogin: false,
        errorPassword: false
      };

      this._handleSubmit = this._handleSubmit.bind(this);
    }


    render() {
      return (
        <Component
          {...this.props}
          onSubmit={this._handleSubmit}
          errorLogin={this.state.errorLogin}
          errorPassword={this.state.errorPassword}
        />
      );
    }


    _handleSubmit(login, password) {
      const {onSubmit} = this.props;

      if (!validator.validate(login.current.value)) {
        this.setState({errorLogin: true});
        return;
      } else {
        this.setState({errorLogin: false});
      }

      if (password.current.value.length === 0) {
        this.setState({errorPassword: true});
        return;
      } else {
        this.setState({errorPassword: false});
      }

      onSubmit({
        login: login.current.value,
        password: password.current.value,
      });
    }
  }


  WithErrors.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };


  return WithErrors;
};


export default withErrors;
