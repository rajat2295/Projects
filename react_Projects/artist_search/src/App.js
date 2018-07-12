import React, { Component } from 'react';
import Home from './components/Home/Home'
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Home />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
