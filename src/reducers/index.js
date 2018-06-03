// index.js
import { combineReducers } from 'redux';
import navIndex from './navIndex';
import myList from './myList';

const rootReducer = combineReducers({
  navIndex,
  myList
});

export default rootReducer;