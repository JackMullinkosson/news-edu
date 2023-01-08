/* eslint-disable default-param-last */
import {
  CHANGE_DIFFICULTY,
  CHANGE_LANGUAGE,
  CHANGE_SORTBY,
  CHANGE_PAGESIZE,
} from '../actions';

const DEFAULT_STATE = {
  difficulty: 'default',
  language: 'english',
  sortBy: 'default',
  pageSize: 5,
};

const sortReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_SORTBY:
      return { ...state, sortBy: action.payload };
    case CHANGE_PAGESIZE:
      return { ...state, pageSize: action.payload };
    default:
      return state;
  }
};

export default sortReducer;
