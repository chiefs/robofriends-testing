import { apiCall } from './api/api';
import * as CONST from './constants';

export const setSearchField = text => ({
  type: CONST.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => dispatch => {
  dispatch({ type: CONST.REQUEST_ROBOTS_PENDING });
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => {
      dispatch({ type: CONST.REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: CONST.REQUEST_ROBOTS_FAILED, payload: err });
    });
};
