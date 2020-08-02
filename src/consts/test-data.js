export const LogoPosition = {
  HEADER: `header`,
  FOOTER: `footer`
};


export const MOVIES = [
  {
    id: `mock-1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/moonrise-kingdom1.jpg`,
    cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/moonrise-kingdom2.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/moonrise-kingdom3.jpg`,
    backgroundColor: `#fff`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fd/%22Night_After_Night%22_Trailer_1932.webm/%22Night_After_Night%22_Trailer_1932.webm.480p.vp933.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fd/%22Night_After_Night%22_Trailer_1932.webm/%22Night_After_Night%22_Trailer_1932.webm.480p.vp944.webm`,
    rating: {
      score: 4.6,
      level: `Normal`,
      countVotes: 240,
    },
    director: `Крис МакКей`,
    actors: `Крис О’Доннелл, Джек Николсон`,
    duration: 120,
    year: 2015,
    genre: `Documentary`,
    description: `Восемь лет назад Бэтмен растворился в ночи, превратившись из героя в беглеца.`,
    isFavorite: false,
    reviews: []
  }, {
    id: `mock-2`,
    title: `Bohemian Rhapsody`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york1.jpg`,
    cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york2.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york3.jpg`,
    backgroundColor: `#333`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/12_Angry_Men_%281957%29_-_Trailer.webm/12_Angry_Men_%281957%29_-_Trailer.webm.480p.vp911.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/12_Angry_Men_%281957%29_-_Trailer.webm/12_Angry_Men_%281957%29_-_Trailer.webm.480p.vp912.webm`,
    rating: {
      score: 9.1,
      level: `Very good`,
      countVotes: 10,
    },
    director: `Крис МакКей`,
    actors: `Арнольд Шварценеггер, Кристиан Бэйл`,
    duration: 320,
    year: 1999,
    genre: `Crime`,
    description: `Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.`,
    isFavorite: true,
    reviews: [{
      id: `reviews-9`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      author: {
        id: `author-1`,
        name: `Lickona Matthew`
      },
      date: `2020-06-28T16:06:01.831Z`,
      rating: 1.2
    }]
  }, {
    id: `mock-3`,
    title: `Macbeth`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/pulp-fiction1.jpg`,
    cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/pulp-fiction2.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/pulp-fiction3.jpg`,
    backgroundColor: `#000`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ca/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm.360p.vp91.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ca/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm/2001_A_Space_Odyssey_%281968%29_-_Trailer.webm.360p.vp92.webm`,
    rating: {
      score: 6.0,
      level: `Good`,
      countVotes: 1240,
    },
    director: `Джоэл Шумахер`,
    actors: ` Ким Бейсингер, Том Харди, Кэнта Миякэ, Марион Котийяр`,
    duration: 20,
    year: 2020,
    genre: `Horror`,
    description: `Приняв на себя вину за смерть прокурора Харви Дента, он пожертвовал всем. Вместе с комиссаром Гордоном они решили, что так будет лучше для всех.`,
    isFavorite: false,
    reviews: [{
      id: `reviews-1`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: {
        id: `author-2`,
        name: `Kate Muir`
      },
      date: `2020-07-28T16:06:01.831Z`,
      rating: 8.9
    }, {
      id: `reviews-2`,
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: {
        id: `author-3`,
        name: `Bill Goodykoontz`
      },
      date: `2019-05-28T16:06:01.831Z`,
      rating: 5.0
    }, {
      id: `reviews-3`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      author: {
        id: `author-4`,
        name: `Amanda Greever`
      },
      date: `2010-06-28T16:06:01.831Z`,
      rating: 3.3
    }, {
      id: `reviews-4`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      author: {
        id: `author-5`,
        name: `Matthew Lickona`
      },
      date: `2020-01-01T13:06:01.831Z`,
      rating: 7.2
    }, {
      id: `reviews-5`,
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      author: {
        id: `author-6`,
        name: `Paula Fleri-Soler`
      },
      date: `2020-02-14T16:06:01.831Z`,
      rating: 10
    }]
  }
];


export const GENRES = [
  {
    id: `g1`,
    title: `All genres`,
    isActive: true
  }, {
    id: `g2`,
    title: `Comedies`,
    isActive: false
  }, {
    id: `g3`,
    title: `Crime`,
    isActive: false
  }
];


export const MarkupElement = {
  BTN_SHOW_MORE: `catalog__button`,
  BTN_PLAYER_EXIT: `player__exit`,
  BTN_PLAYER_FULL_SCREEN: `player__full-screen`,
  BTN_PLAYER_PLAY: `player__play`,
  BTN_SIGN_IN: `sign-in__btn`,
  GENRE_LINK: `catalog__genres-link`,
  MOVIE_CARD: `small-movie-card`,
  MOVIE_CARD_TITLE: `small-movie-card__title`,
  MOVIE_CARD_COVER: `small-movie-card__image`,
  MOVIE_PLAYER: `player__video`,
  MOVIE_TAB: `movie-nav__item`,
  PROMO_BTN_PLAY: `btn--play`,
  PROMO_BTN_ADD_TO_LIST: `btn--list`,
  PROMO_POSTER: `movie-card__poster`,
  PROMO_TITLE: `movie-card__title`
};


export const MovieTabList = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};


export const Time = {
  duration: 200,
  current: 100,
  left: `01:02:03`
};


export const Page = {
  MAIN: `/`,
  MOVIE: `/films/`
};


export const CountMovies = {
  ALL: 20,
  START: 8,
  LIKED_BY_GENRE: 4
};


export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


export const UserDatumState = {
  authStatus: AuthStatus.AUTH,
  user: {
    id: `user-1`,
    email: `sladkov.e.m@outlook.com`,
    name: `Batman`,
    avatarUrl: `https://4.react.pages.academy/wtw/static/avatar/5.jpg`
  }
};


export const UserDatumStateNoAuth = {
  authStatus: AuthStatus.NO_AUTH,
  user: {
    id: `user-1`,
    email: `sladkov.e.m@outlook.com`,
    name: `Batman`,
    avatarUrl: `https://4.react.pages.academy/wtw/static/avatar/5.jpg`
  }
};
