import * as actions from './actions';
import * as CONST from './constants';
// import React from 'react';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);
it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CONST.CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots api', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  console.log(action);

  const expectedAction = {
    type: CONST.REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
