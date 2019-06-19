import { FETCH_CHARACTERS } from "../actions/types";

const INITIAL_STATE = {};

// State maintained fro Characters name.
export default function Characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        augData: action.augData
      };

    default:
      return state;
  }
}
