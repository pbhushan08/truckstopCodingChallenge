import React from 'react';
import './SearchResults.css';


const SearchResults = ({ characters, setCharacter, fetchFilms }) => {
  return(
    <section className="characters-section">
   
      {characters && 
        <ul>
        {characters.map((character) => (
          <li key = {character.name} 
              onClick = {(click) =>{ 
              setCharacter(character.id)
              fetchFilms(character.id,click)
            }}>
            {character.name}
          </li>
        ))}
      </ul> }
   
  </section>
  )
}
export default SearchResults;
