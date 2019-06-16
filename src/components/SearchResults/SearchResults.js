import React from 'react';
import './SearchResults.css';

const SearchResults = ({ characters, setCharacter }) => {
  return(
    <section className="characters-section">
   
      {characters && 
        <ul>
        {characters.map((character) => (
          <li key = {character.name} onClick = {() => setCharacter(character.id)}>
            {character.name}
          </li>
        ))}
      </ul> }
   
  </section>
  )
}
export default SearchResults;
