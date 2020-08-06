import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.DATUM_REVIEW;


export const getIsFormBlocked = (state) => state[NAME_SPACE].isFormBlocked;


export const getMessageStatus = (state) => state[NAME_SPACE].messageStatus;


export const getMessageText = (state) => state[NAME_SPACE].messageText;


export const getRating = (state) => state[NAME_SPACE].rating;
