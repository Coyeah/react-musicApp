// index.js
import { combineReducers } from 'redux';
import navIndex from './navIndex';
import myList from './myList';
import platform from './platform';

const rootReducer = combineReducers({
  navIndex,
  myList,
  platform
});

export default rootReducer;