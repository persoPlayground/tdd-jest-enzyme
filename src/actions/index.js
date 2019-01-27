import axios from 'axios';

import { CORRECT, GUESS, GETSECRET } from './constants';
import { matchLettersCount } from '../helpers';

export const correctWord = () => ({ type: CORRECT });

export const guessWord = word => (dispatch, getState) => {
const {secret}= getState();
if(secret === word) { dispatch({ type: CORRECT})}
    dispatch({type: GUESS, payload: { word, letterMatch: matchLettersCount(word, secret)}})

};

export const getSecret = () => async dispatch => {

    const response = await axios('http://secret-words-api');
    const secret = response.data;
    dispatch({
        type: GETSECRET,
        secret
    })
}
