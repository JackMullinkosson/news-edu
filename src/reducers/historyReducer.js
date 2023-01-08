/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import { ADD_HISTORY, DELETE_HISTORY, REMOVE_HISTORY } from '../actions';

const DEFAULT_STATE = localStorage.articleHistory
  ? JSON.parse(localStorage.getItem('articleHistory'))
  : {};

function historyReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_HISTORY:
      const tempADD = { ...state };
      tempADD[action.payload.id] = action.payload;
      return tempADD;
    case REMOVE_HISTORY:
      const tempREMOVE = { ...state };
      delete tempREMOVE[action.payload.id];
      return tempREMOVE;
    case DELETE_HISTORY:
      return {};
    default:
      return state;
  }
}

export default historyReducer;
