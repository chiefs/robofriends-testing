import * as reducers from './reducers';
import * as CONST from './constants';
import { getMaxListeners } from 'cluster';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should return the initial state', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CONST.CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: '',
  };
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle the pending action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: CONST.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: '',
    });
  });

  it('should handle the success action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: CONST.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: 'test',
            email: 'test@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 123,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      isPending: false,
      error: '',
    });
  });

  it('should handle the failed action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: CONST.REQUEST_ROBOTS_FAILED,
        payload: 'Nooooo!!!!',
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: 'Nooooo!!!!',
    });
  });
});
