export const LogoPosition = {
  HEADER: `header`,
  FOOTER: `footer`
};


export const COUNT_GENRES = 10;


export const ALL_GENRES = `All genres`;


export const CountMovies = {
  ALL: 20,
  START: 8,
  LIKED_BY_GENRE: 4
};


export const TextualRating = {
  BAD: {
    level: `Bad`,
    from: 0,
  },
  NORMAL: {
    level: `Normal`,
    from: 3
  },
  GOOD: {
    level: `Good`,
    from: 5
  },
  VERY_GOOD: {
    level: `Very good`,
    from: 8
  },
  AWESOME: {
    level: `Awesome`,
    from: 10
  }
};


export const Page = {
  MAIN: `/`,
  MOVIE: `/films`,
  LOGIN: `/login`,
  ADD_REVIEW: `/review`
};


export const BASE_URL = `https://4.react.pages.academy`;


export const Url = {
  WTW: `wtw`,
  FILMS: `films`,
  COMMENTS: `comments`,
  PROMO: `promo`,
  LOGIN: `login`
};


export const MovieTabList = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};


export const HIDDEN_CLASS = `visually-hidden`;


export const Time = {
  MINUTES: 60,
  SECONDS: 60
};

export const PAD_STRING_ZERO = `0`;


export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


export const FormatRule = {
  REVIEW_DATE: `MMMM DD, YYYY`,
  REVIEW_DATE_HIDE: `YYYY-MM-DD`
};


export const ReviewMessage = {
  DEFAULT: ``,
  LENGTH_MIN: 50,
  LENGTH_MAX: 400
};


export const ReviewMessageStatus = {
  DEFAULT: ``,
  SUCCESS: `Ваш комментарий добавлен!`,
  ERROR_SENDING: `Извините, при добавлении Вашего комментария возникла ошибка. Попробуйте позднее.`,
  ERROR_LENGTH_MIN: `Ваше сообщение менее ${ReviewMessage.LENGTH_MIN} символов`,
  ERROR_LENGTH_MAX: `Ваше сообщение более ${ReviewMessage.LENGTH_MAX} символов`
};


export const RequestStatusCode = {
  OK: 200,
  UNAUTHORIZED: 401
};


export const DECIMAL_BASE = 10;


export const RATING_STARS = [1, 2, 3, 4, 5];


export const Rating = {
  DEFAULT: 3,
  WEIGHT: 2
};
