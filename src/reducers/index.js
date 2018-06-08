// index.js
import { combineReducers } from 'redux';
import navIndex from './navIndex';
import myList from './myList';
import platform from './platform';
import player from './player';

const rootReducer = combineReducers({
  navIndex,
  myList,
  platform,
  player,
});

export default rootReducer;