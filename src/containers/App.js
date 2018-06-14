// App.js
import React, { Component } from 'react';

import style from '../style/style.scss';

import Navigation from './Navigation';
import MainPoints from './MainPoints';
import Player from './Player';
import BioSet from './BioSet';

class App extends Component {
  render() {
    return (
      <div className="music">
        <Navigation />
        <MainPoints />
        <Player />
        <BioSet />
      </div>
    );
  }
}

export default App;