This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

/////////////////////////////////////////////////////

I have created this coding challenge using React & Redux. I am also handling the http error.I have also used media queries to make it work on mobile & desktop.
Below is my following folder structure:
In the src folder you will find -
1. actions folder - which I am using to dispatch my actions.
- Characters.js - Character.js action folder is used for getting the list of characters name.
- Films.js - Films action folder is used for getting the films details of the Character selected & to handle the toggle button(click).

2. assets- to store images & gif.

3. components
- CharacterDetails folder - is used for displaying the Character names.
- ErrorDisplay folder - is used to display/handle the error we are getting by clicking Character with "unknown" id.
- FilmDetails - to display the list of the films and it's details to user when a particular Character Name is clicked.

4. constant - To save the API URL's & JSON file.

5. container 
- Homepage - Is the main container page where I am importing all the components & mapping component to the Redux Store.

6. reducers
- Characters - State in which I am storing the Characters name.
- Films - State for maintaing the film details, id toggle button(click). Click is changing based on the State of the Web App:('Character','Films', 'Error').
