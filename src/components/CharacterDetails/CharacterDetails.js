import React from "react";
import "./CharacterDetails.css";

// Component to diplay the Character names.
const CharacterDetails = ({ characters, fetchFilms }) => {
  return (
    <section className="characters-section">
      {characters && (
        <ul>
          {characters.map(character => (
            <li
              key={character.name}
              onClick={click => {
                fetchFilms(character.id, click = "Films")
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
