import NameSpace from "../name-space";


const NAME_SPACE = NameSpace.DATUM;


export const getPage = (state) => state[NAME_SPACE].page;


export const getMovies = (state) => state[NAME_SPACE].movies;


export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;


export const getSelectedMovie = (state) => state[NAME_SPACE].selectedMovie;


export const getLikedMovies = (state) => state[NAME_SPACE].likedMovies;


export const getCountShowedMovies = (state) => state[NAME_SPACE].countShowedMovies;


export const getIsPlayingMovie = (state) => state[NAME_SPACE].isPlayingMovie;


export const getGenres = (state) => state[NAME_SPACE].genres;


export const getSelectedGenre = (state) => state[NAME_SPACE].selectedGenre;
