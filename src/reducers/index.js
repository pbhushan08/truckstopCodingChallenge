import { combineReducers } from 'redux';
import characters from './Characters';
import films from './Films';

export default combineReducers({
    characters,
    films
})