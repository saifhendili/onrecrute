import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';
import offre from './offre';

export default combineReducers({

  auth,
  alert,
  offre
});