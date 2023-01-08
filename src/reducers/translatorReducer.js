/* eslint-disable default-param-last */
import { SET_TRANSLATOR } from '../actions';

const getInitialState = () => {
  const data = localStorage.getItem('translator');
  const { translator, language } = JSON.parse(data) || {};

  return {
    translator: translator || 'PT',
    language: language || 'Portuguese',
  };
};

const initialState = getInitialState();

const translatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSLATOR:
      return {
        translator: action.payload.translator,
        language: action.payload.language,
      };
    default:
      return state;
  }
};

export default translatorReducer;
