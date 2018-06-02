// App.js
import React, { Component } from 'react';

import style from '../style/style.scss';

import Navigation from './Navigation';
import MainPoints from './MainPoints';

class App extends Component {
  render() {
    return (
      <div className="music">
        <Navigation />
        <MainPoints />
      </div>
    );
  }
}

export default App;