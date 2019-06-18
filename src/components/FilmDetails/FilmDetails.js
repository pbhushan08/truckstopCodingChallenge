import React from 'react';
import './FilmDetails.css';
//import logo from '../../assets/logo.png';

//   
     

const filmDetails = ({films}) => (
   
   <ul>
        {films.map(({ title, release_date,director, producer }) => {
          const date = new Date((release_date + " 00:00:00")).toDateString()
          return (
            <li key={title}>
              {title} ({date})
            </li>
          );
        
       })}
      </ul>
) 


export default filmDetails;
