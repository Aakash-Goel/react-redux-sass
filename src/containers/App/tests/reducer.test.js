import { fromJS } from 'immutable';

import AppReducer from '../reducer';

describe('AppReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      data: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(AppReducer(undefined, {})).to.deep.equal(expectedResult);
  });

  it('should handle the "loadConfig" action correctly', () => {
    const expectedResult = state.merge({ data: true });
    const action = {
      type: 'REQUEST_SUCCESS',
      data: true,
    };
    expect(AppReducer(state, action)).to.deep.equal(expectedResult);
  });
});
