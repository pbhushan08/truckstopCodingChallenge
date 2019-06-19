import React from "react";
import "./FilmDetails.css";

const closeHandler = (click, fetchFilms, id) => {
  //console.log("FILM COMP", click);

  fetchFilms(id, (click = "Character"));
};

// Component to display the Film details
const filmDetails = ({ films = [], fetchFilms, id }) => (
  
  <div className="list">
    <div
      className="button"
      onClick={click => closeHandler(click, fetchFilms, id)}
    >
      X
    </div>
    <h2 className = "title">FILM DETAILS</h2>
    <ul>
      {films.map(({ title, release_date, director }) => {
        const date = new Date(release_date + " 00:00:00").toDateString();

        return (
          <li key={title} className="films__header">
            {`Title: ${title},`} <dd>{` Release Date: ${date},`}</dd>
            {` Director: ${director},`}
          </li>
        );
      })}
    </ul>
  </div>

);

export default filmDetails;
