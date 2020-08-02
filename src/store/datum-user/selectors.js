import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.DATUM_USER;


export const getAuthStatus = (state) => state[NAME_SPACE].authStatus;


export const getUserDatum = (state) => state[NAME_SPACE].user;
