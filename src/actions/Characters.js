import { FETCH_CHARACTERS, SET_CHARACTERS } from './types';
import { API } from '../constant/api';



export function fetchCharacters() {
    return dispatch => {
        fetch(`${API}/people/`)
        .then(response => response.json())
        .then(res => res.results)
        .then(characters =>
            dispatch(responseCharacters(characters)));
    }
    
};

export function responseCharacters(characters){
    return{
        type: FETCH_CHARACTERS,
        payload: characters
    }
}