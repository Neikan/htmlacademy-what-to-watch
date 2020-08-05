import NameSpace from "../name-space";


const NAME_SPACE = NameSpace.DATUM;


export const getCountShowedMovies = (state) => state[NAME_SPACE].countShowedMovies;


export const getGenres = (state) => state[NAME_SPACE].genres;


export const getFavoriteMovies = (state) => state[NAME_SPACE].favoriteMovies;


export const getIsLoadingFavoriteMovies = (state) => state[NAME_SPACE].isLoadingFavoriteMovies;


export const getIsLoadingMovies = (state) => state[NAME_SPACE].isLoadingMovies;


export const getIsLoadingPromo = (state) => state[NAME_SPACE].isLoadingPromo;


export const getIsLoadingReviews = (state) => state[NAME_SPACE].isLoadingReviews;


export const getIsPlayingMovie = (state) => state[NAME_SPACE].isPlayingMovie;


export const getLikedMovies = (state) => state[NAME_SPACE].likedMovies;


export const getMovies = (state) => state[NAME_SPACE].movies;


export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;


export const getReviews = (state) => state[NAME_SPACE].reviews;


export const getSelectedGenre = (state) => state[NAME_SPACE].selectedGenre;
