/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import { ADD_SAVED, REMOVE_SAVED, DELETE_SAVED } from '../actions';

const DEFAULT_STATE = localStorage.savedArticles
  ? JSON.parse(localStorage.getItem('savedArticles'))
  : {};

function savedReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_SAVED:
      const tempADD = { ...state };
      tempADD[action.payload.id] = action.payload;
      return tempADD;
    case REMOVE_SAVED:
      const tempREMOVE = { ...state };
      delete tempREMOVE[action.payload.id];
      return tempREMOVE;
    case DELETE_SAVED:
      return {};
    default:
      return state;
  }
}

export default savedReducer;
