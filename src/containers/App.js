// App.js
import React, { Component } from 'react';
import Navigation from './Navigation';
import style from '../style/style.scss';

class App extends Component {
  render() {
    return (
      <div className="music">
        <Navigation />
      </div>
    );
  }
}

export default App;