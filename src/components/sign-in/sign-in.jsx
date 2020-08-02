// Импорт библиотек
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

// Импорт компонентов
import Footer from "../footer/footer.jsx";
import Logo from "../logo/logo.jsx";

// Импорт типов, констант, утилит
import {LogoPosition} from "../../consts/common-data.js";


/**
 * Создание компонента, обеспечивающего перевод проигрывателя в режим воспроизведения
 * @return {Object} созданный компонент
 */
class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента
   * @return {Object} созданный компонент
   */
  render() {
    const {errorLogin, errorPassword} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo logoPosition={LogoPosition.HEADER} />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#" className="sign-in__form"
            onSubmit={this._handleSubmit}>
            <div className="sign-in__message">
              {errorLogin && <p>Please enter a valid email address</p>}
              {errorPassword && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this._loginRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this._passwordRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }


  /**
   * Метод, обеспечивающий отправку формы авторизации
   * @param {Object} evt событие
   */
  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();
    onSubmit(this._loginRef, this._passwordRef);
  }
}


SignIn.propTypes = {
  errorLogin: PropTypes.bool.isRequired,
  errorPassword: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};


export default SignIn;
