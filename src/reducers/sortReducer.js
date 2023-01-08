/* eslint-disable default-param-last */
import { CHANGE_DIFFICULTY, CHANGE_LANGUAGE, CHANGE_SORTBY } from '../actions';

const DEFAULT_STATE = {
  difficulty: 'default',
  language: 'english',
  sortBy: 'default',
};

const sortReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_SORTBY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default sortReducer;
