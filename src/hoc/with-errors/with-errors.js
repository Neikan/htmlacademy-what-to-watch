// Импорт библиотек
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import validator from "email-validator";


/**
 * Создание компонента, обеспечивающего валидацию формы авторизации
 * @param {Object} Component "оборачиваемый" компонент
 * @return {Object} созданный компонент
 */
const withErrors = (Component) => {
  class WithErrors extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorLogin: false,
        errorPassword: false,
        errors: []
      };

      this._handleSubmit = this._handleSubmit.bind(this);
    }


    /**
     * Метод, обеспечивающий отображение компонента
     * @return {Object} созданный компонент
     */
    render() {
      return (
        <Component
          {...this.props}
          onSubmit={this._handleSubmit}
          errors={this.state.errors}
          errorLogin={this.state.errorLogin}
          errorPassword={this.state.errorPassword}
        />
      );
    }


    /**
     * Метод, обеспечивающий проверку и отправку формы авторизации
     * @param {Object} login поле ввода e-mail
     * @param {Object} password поле ввода пароля
     */
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
