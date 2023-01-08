/* eslint-disable default-param-last */
import getCocaWords from '../helpers/getCocaWords';
import getNewWords from '../helpers/getWordList';

const DEFAULT_STATE = {
  cocaWords: getCocaWords(),
  wordList: getNewWords(),
};

const wordInfoReducer = (state = DEFAULT_STATE) => state;

export default wordInfoReducer;
