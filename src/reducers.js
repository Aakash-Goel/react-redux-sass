// import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import appReducer from './containers/App/reducer';

/**
 * Creates the main reducer with the asynchronously loaded or dynamically injected ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    global: appReducer,
    ...asyncReducers,
  });
}
