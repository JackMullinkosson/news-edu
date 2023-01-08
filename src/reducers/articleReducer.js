/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */

import { ADD_STORIES } from '../actions';

const DEFAULT_STATE = {
  // 54654654654: {
  //   id: 54654654654,
  //   title: 'Funky Ckicken',
  //   author: 'Chicken Little',
  //   image:
  //     'https://imgs.search.brave.com/Uhy7Bo59dFmB67DI6EyAQFCmup5YsEdEzhgxEK--Ro0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/WHQ0TVlXTGIzcDJu/RWNBaXZ5RTR3SGFG/aiZwaWQ9QXBp',
  //   description: 'What came first? The chicken or the egg?',
  //   source: 'Chickens.com',
  //   htmlContent: '<div>CHICKENS</dive>',
  //   wordCount: 777,
  //   beginnerWords: 0.6,
  //   intermediateWords: 0.1,
  //   advancedWords: 0.2,
  //   super: 0.1,
  // },
};

const reducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_STORIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
