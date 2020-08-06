// Импорт библиотек
import {combineReducers} from 'redux';
import {reducer as datum} from './datum/datum.js';
import {reducer as datumReview} from './datum-review/datum-review.js';
import {reducer as datumUser} from './datum-user/datum-user.js';

// Импорт типов, констант, утилит
import NameSpace from './name-space.js';


export default combineReducers({
  [NameSpace.DATUM]: datum,
  [NameSpace.DATUM_REVIEW]: datumReview,
  [NameSpace.DATUM_USER]: datumUser
});
