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


export const MarkupElement = {
  MOVIE_CARD: `small-movie-card`,
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
  MOVIE: `/films/`
};


export const Url = {
  FILMS: `films`,
  COMMENTS: `comments`,
  PROMO: `promo`
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


export const defaultMovie = {
  id: ``,
  title: ``,
  poster: ``,
  cover: ``,
  backgroundImage: ``,
  backgroundColor: ``,
  preview: ``,
  video: ``,
  rating: {
    score: 0,
    level: ``,
    countVotes: 0,
  },
  director: ``,
  actors: ``,
  duration: 0,
  year: 0,
  genre: ``,
  description: ``,
  isFavorite: false,
  reviews: []
};
