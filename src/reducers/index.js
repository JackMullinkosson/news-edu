import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import savedReducer from './savedReducer';
import historyReducer from './historyReducer';
import sortReducer from './sortReducer';
import translatorReducer from './translatorReducer';
import visitedReducer from './visitedReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  saved: savedReducer,
  history: historyReducer,
  sort: sortReducer,
  translator: translatorReducer,
  visited: visitedReducer,
  loading: loadingReducer,
});

export default rootReducer;
