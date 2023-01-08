/* eslint-disable default-param-last */
import { SET_LOADING } from '../actions';

const visitedReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default visitedReducer;
