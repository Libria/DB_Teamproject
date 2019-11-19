import React, { Component } from 'react';
import './App.css';
import Navtop from './Navtop';
import Mainimg from './Mainimg';
import Moviecon from './Moviecon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navtop></Navtop>
        <Mainimg id="movies"></Mainimg>
        <Moviecon></Moviecon>
      </div>
    );
  }
}

export default App;
