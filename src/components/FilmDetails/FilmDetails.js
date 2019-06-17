import React from 'react';
import './FilmDetails.css';

const filmDetails = ({films}) => {
    if(!films) {
        return null;
    }
    return (
      <div>
      <h1>Hello</h1>
      </div>
        // <div className = "films">
            
        //    <ul>
        //      {films.map(({ title, release_date,director, producer }) => {
        //        const date = new Date((release_date + " 00:00:00")).toDateString()
        //        return (
        //          <li key={title}>
        //            {title} ({date})
        //          </li>
        //        );
             
        //      })}
        //    </ul>
         
        //    </div>
           
       )
            }

export default filmDetails;
