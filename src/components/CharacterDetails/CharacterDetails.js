import React from "react";
import "./CharacterDetails.css";

const CharacterDetails = ({ characters, fetchFilms }) => {
  return (
    <section className="characters-section">
      {characters && (
        <ul>
          {characters.map(character => (
            <li
              key={character.name}
              onClick={click => {
                fetchFilms(character.id, click)
              }}
            >
              {character.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default CharacterDetails;
