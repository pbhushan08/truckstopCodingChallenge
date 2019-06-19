import React from 'react';
import './ErrorDisplay.css';

const closeErrorHandler = (click, fetchFilms, id) => {
    //console.log('FILM COMP', click);
     fetchFilms(id = "1",click = "Character");
}

//Component to diplay the Error after the wrong the Character Id.
const ErrorDisplay = ( {fetchFilms, id }) => {
    return (
        <div className = "error">
        <div className = "button" onClick = { (click) => closeErrorHandler(click, fetchFilms, id)}>X</div>

        <h1 className = "text">The Film details for this Character is temporarily not available</h1>
        </div>
    )
}

export default ErrorDisplay;