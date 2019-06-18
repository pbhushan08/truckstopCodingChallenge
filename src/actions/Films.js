import { FETCH_FILMS } from "./types";
import { API_URL } from "../constant/api";

export function fetchFilms(selectedId) {
  console.log("FETCH_FILMS");
  return dispatch => {
    console.log("reached inside dispatch");
    fetch(API_URL + "/people/" + selectedId)
      .then(res => {
        if(res.status === 200)
          return res.json()
        else{
        let allFilms = [{"data":"Bad Data"}]
        dispatch({ type: FETCH_FILMS,allFilms})}
      })
      .then(people => {
        if(!people.status){
        getAllFilms(people.films, dispatch)}
        ;
      })
      .catch(function (error) {
        if (error.response) {
          console.log("error data: ");
          console.log(error.response.data);
        }
      });
  };
}

async function getAllFilms(filmUrls, dispatch) {
  let allFilms;
  try {
    allFilms = await Promise.all(
      filmUrls.map(film => {
        // console.log(film);
        return fetch(film)
          .then(res => res.json())
          .catch(c => console.log(c.response.data));
      })
    );
  } catch (c) {
    console.log(c);
  }

  dispatch({ type: FETCH_FILMS, allFilms });
}
