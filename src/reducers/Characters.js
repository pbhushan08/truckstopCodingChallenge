import { FETCH_CHARACTERS, SET_CHARACTERS } from '../actions/types';

const INITIAL_STATE = {
    characters: [],
    character: {}
};

export default function (state= INITIAL_STATE, action){
    switch(action.type){
        case FETCH_CHARACTERS:
            return {
                ...state, 
                characters: action.payload
            }
        default:
            return state;
    }
}