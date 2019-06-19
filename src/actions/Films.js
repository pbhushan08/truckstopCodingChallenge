import { FETCH_FILMS, FETCH_ERROR } from "./types";
import { API_URL } from "../constant/api";

// Fetching data for Film details using Characters ID.
export function fetchFilms(selectedId, click) {
  //console.log("FETCH_FILMS", selectedId);
  return dispatch => {
    fetch(API_URL + "/people/" + selectedId)
      .then(res => {
        if (res.status === 200) return res.json();
        else {
          let allFilms = [{ data: "Bad Data" }];

          dispatch({ type: FETCH_ERROR, allFilms, click: "Error", selectedId });
        }
      })
      .then(people => {
        if (!people.status) {
          getAllFilms(people.films, dispatch, click, selectedId);
        }
      })
      .catch(function(error) {
        if (error.response) {
          //console.log("error data: ");
          //console.log(error.response.data);
        }
      });
  };
}

async function getAllFilms(filmUrls, dispatch, click, selectedId) {
  let allFilms;
  try {
    allFilms = await Promise.all(
      filmUrls.map(film => {
        // //console.log(film);
        return fetch(film)
          .then(res => res.json())
          .catch(c => console.log(c.response.data));
      })
    );
  } catch (c) {
    console.log(c);
  }
  let payload = {
    allFilms: allFilms,
    click,
    selectedId
  };
  dispatch({ type: FETCH_FILMS, payload: payload });
}
