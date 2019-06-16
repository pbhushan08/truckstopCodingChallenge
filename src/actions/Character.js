import { API_URL } from '../constant/api';
import { SET_CHARACTER } from './types';

export function getCharacterProfile(selectedId) {
  
    return dispatch =>
    fetch(API_URL+'/people/'+selectedId)
      .catch(function (error) {
        if (error.response) {
          console.log('error data: ', error.response.data);
        };
      })
      .then(res => res.json())
      .then(profile => console.log(profile));
        // .then(profile => {
        //   dispatch(setCharacterProfile(profile));
        //   dispatch(getCharacterHomeworld(profile.homeworld));
        //   dispatch(getCharacterMovies(profile.films));
       // });
};

export function setCharacter(selectedId)  {
    console.log(selectedId)
return {
    type: SET_CHARACTER,
}
};