// index.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

// import configureStore from './configureStore';
// const store = configureStore();

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store.getState());

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Main />, document.getElementById('root'));

// import Navigation from './containers/Navigation';
// render(<Navigation />, document.getElementById('root'));