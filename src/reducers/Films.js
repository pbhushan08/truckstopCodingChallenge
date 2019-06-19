import { FETCH_FILMS, FETCH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  click: "Character",
  id: ""
};

//State maintained for Film Details and to handle the toggle button.
export default function Films(state = INITIAL_STATE, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_FILMS:
      return {
        ...state,
        films: action.payload.allFilms,
        click: action.payload.click,
        id: action.payload.selectedId
      };
    case FETCH_ERROR:
      return {
        ...state,
        click: action.click,
        id: action.selectedId
      };
    default:
      return state;
  }
}
