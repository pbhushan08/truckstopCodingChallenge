import React from 'react';
import './FilmDetails.css';

const filmDetails = ({ films, fetchFilms}) => (
    <div className = "list">
    <div className = "button">X</div>
    <h2>FILM DETAILS</h2>
    <ul>
    {films.map(({ title, release_date, director }) => {
        const date = new Date((release_date + " 00:00:00")).toDateString()

      return (
        <li key={title} className ="films__header">
                {`Title: ${title}`} ({date})
                     {`Director: ${director}`}
        </li>
      );
    })}
  </ul>
</div>

)
    

export default filmDetails;
