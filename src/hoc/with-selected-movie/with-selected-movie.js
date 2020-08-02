import React, {PureComponent} from "react";


const withSelectedMovie = (Component) => {
  class WithSelectedMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedMovie: null
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
          selectedMovie={this.state.selectedMovie}
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
     * @param {Object} movie выбранный фильм
     */
    _handleMovieMouseEnter(movie) {
      this._timeout = setTimeout(() => {
        this.setState({
          selectedMovie: movie
        });
      }, 10000);
    }


    /**
     * Метод, обспечивающий обновление состояния при отводе курсора с фильма
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
