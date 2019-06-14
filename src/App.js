import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Search from '../src/container/Search/Search';



function App() {
  return (
    <Provider store = { store }>
      <div className="App">
      <Search />
    </div>
    </Provider>
  );
}

export default App;
