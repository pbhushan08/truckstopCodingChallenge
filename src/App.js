import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Search from '../src/container/Search/Search';
import FilmDetails from '../src/components/FilmDetails/FilmDetails';
import logo from './assets/logo.png';
//import gif from './assets/starwars.gif';



class App extends Component {
  render() {
  return (
    <Provider store = { store }>
    <img
      className="image"
      src={logo}
      alt="Star Wars: React App"
    />
   
      <div className="App">
      <FilmDetails />

      <Search />
    </div>
    </Provider>
  );
  };
};

export default App;
