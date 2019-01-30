import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img alt="" src={require('./images/castleTown.png')} />
      </div>
    );
  }
}

export default App;

/* 
---To Do--
- map on left, names on right, 
- hover on name to highlight area
- on hover, bottom fills with wiki info



*/