/* eslint-disable default-param-last */
import { SET_VISITED } from '../actions';

const visitedReducer = (
  state = localStorage.getItem('visited') || false,
  action
) => {
  switch (action.type) {
    case SET_VISITED:
      return action.payload;
    default:
      return state;
  }
};

export default visitedReducer;
