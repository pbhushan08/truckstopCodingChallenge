import { FETCH_FILMS } from "../actions/types";

const INITIAL_STATE = {
  click: false
};

export default function Films(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_FILMS:
      return {
        ...state,
        films: action.allFilms,
        click: true
      };
    default:
      return state;
  }
}
