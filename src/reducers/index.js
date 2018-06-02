// index.js
import { combineReducers } from 'redux';
import navIndex from './navIndex';

const rootReducer = combineReducers({
  navIndex,
});

export default rootReducer;