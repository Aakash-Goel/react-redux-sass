import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  data: null,
});

function appReducer(state = initialState, action) {
  if (action.type === 'REQUEST_SUCCESS') {
    return state.merge({ data: action.data });
  }
  return state;
}

export default appReducer;
