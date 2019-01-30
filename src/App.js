import React, { Component } from 'react';
import './App.scss';

const mapImg = require('./images/Hyrule_map.png');

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="title-section">Interactive Map of Hyrule</div>

        <div className="main">
          <div className="left-section">
            <div className="map-container">
              <img src={mapImg} alt="Hyrule map" className="map"></img>
            </div>
            <div className="info-container"></div>
          </div>

          <div className="right-section">
          </div>
        </div>

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