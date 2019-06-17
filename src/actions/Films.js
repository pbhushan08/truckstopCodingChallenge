import { FETCH_FILMS } from './types';
import { API_URL } from '../constant/api';

export function fetchFilms(selectedId) {
  console.log('FETCH_FILMS')
  return dispatch => {
    let allFilms = [], film;
    console.log("reached inside dispatch")
    fetch(API_URL + '/people/' + selectedId)
      .then(res => res.json())
      .then(people =>{  
        console.log(people);
        people.films.forEach(async (f) => {
        try {
          console.log("reached inside foreach")
          let response = await fetch(f);
          film = await response.json();
          allFilms.push(film);
          console.log('ALL FILMS', allFilms)
        }
        catch (e) {
          console.log(e);
        }
      })
    })
      .catch(function (error) {
        if (error.response) {
          console.log('error data: ', error.response.data);
        };
      })
  dispatch({ type: FETCH_FILMS, allFilms })
}
};

// export function setCharacterFilms(selectedId,film) {
//     fetchFilms(selectedId);

//     return {
//         type: FETCH_FILMS,
//         film
//     }
// }