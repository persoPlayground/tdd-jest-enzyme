import { combineReducers } from 'redux';
import success from './success';
import guessedWords from './guessedWord';
import secret from './secretWord';

export default combineReducers({
    secret,
    success,
    guessedWords
});