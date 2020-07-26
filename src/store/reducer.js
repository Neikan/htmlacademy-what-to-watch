// Импорт библиотек
import {combineReducers} from 'redux';
import {reducer as datum} from './datum/datum.js';

// Импорт типов, констант, утилит
import NameSpace from './name-space.js';


export default combineReducers({
  [NameSpace.DATUM]: datum
});
