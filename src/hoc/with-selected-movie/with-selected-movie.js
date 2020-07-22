import React, {PureComponent} from "react";


const withSelectedMovie = (Component) => {
  class WithSelectedMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedMovieId: null
      };

      this._timeout = null;

      this._handleMovieMouseEnter = this._handleMovieMouseEnter.bind(this);
      this._handleMovieMouseLeave = this._handleMovieMouseLeave.bind(this);
    }


    /**
     * Метод, обеспечивающий отрисовку компонента
     * @return {Object} созданный компонент
     */
    render() {
      return (
        <Component
          {...this.props}
          selectedMovieId={this.state.selectedMovieId}
          onMovieMouseEnter={this._handleMovieMouseEnter}
          onMovieMouseLeave={this._handleMovieMouseLeave}
        />
      );
    }


    /**
     * Метод, выполняющий очистку таймаута
     */
    componentWillUnmount() {
      clearTimeout(this._timeout);
    }


    /**
     * Метод, обспечивающий обновление состояния в соответствии с фильмом, на который выполнено наведение курсора
     * @param {Object} movieId идентификатор фильма
     */
    _handleMovieMouseEnter(movieId) {
      this._timeout = setTimeout(() => {
        this.setState({
          selectedMovieId: movieId
        });
      }, 10000);
    }


    /**
     * Метод, обспечивающий обновление состояния при убирании курсора с фильма
     */
    _handleMovieMouseLeave() {
      clearTimeout(this._timeout);
      this.setState({
        activeMovieId: null
      });
    }
  }


  return WithSelectedMovie;
};


export default withSelectedMovie;
