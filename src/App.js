import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./container/HomePage/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
