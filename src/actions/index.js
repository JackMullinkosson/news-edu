export const ADD_STORIES = 'ADD_STORIES';
export const ADD_SAVED = 'ADD_SAVED';
export const DELETE_SAVED = 'DELETE_SAVED';
export const ADD_HISTORY = 'ADD_HISTORY';
export const REMOVE_HISTORY = 'REMOVE_HISTORY';
export const REMOVE_SAVED = 'REMOVE_SAVED';
export const DELETE_HISTORY = 'DELETE_HISTORY';
export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_SORTBY = 'CHANGE_SORTBY';
export const SET_TRANSLATOR = 'SET_TRANSLATOR';
export const SET_VISITED = 'SET_VISITED';
export const SET_LOADING = 'SET_LOADING';
export const CHANGE_PAGESIZE = 'CHANGE_PAGESIZE';

export function addStories(storiesData) {
  return {
    type: ADD_STORIES,
    payload: storiesData,
  };
}

export function addSaved(savedItem) {
  const locallySaved = JSON.parse(localStorage.getItem('savedArticles'));
  const newSaved = { ...locallySaved, [savedItem.id]: savedItem };

  localStorage.setItem('savedArticles', JSON.stringify(newSaved));

  return {
    type: ADD_SAVED,
    payload: savedItem,
  };
}

export function removeSaved(removedItem) {
  const locallySaved = JSON.parse(localStorage.getItem('savedArticles'));
  delete locallySaved[removedItem.id];

  localStorage.setItem('savedArticles', JSON.stringify(locallySaved));

  return {
    type: REMOVE_SAVED,
    payload: removedItem,
  };
}

export function deleteSaved(savedItem) {
  localStorage.setItem('savedArticles', JSON.stringify({}));

  return {
    type: DELETE_SAVED,
    payload: savedItem,
  };
}

export function addHistory(historyItem) {
  const articleHistory = JSON.parse(localStorage.getItem('articleHistory'));
  const newArticleHistory = {
    ...articleHistory,
    [historyItem.id]: historyItem,
  };

  localStorage.setItem('articleHistory', JSON.stringify(newArticleHistory));

  return {
    type: ADD_HISTORY,
    payload: historyItem,
  };
}

export function removeHistory(historyItem) {
  const articleHistory = JSON.parse(localStorage.getItem('articleHistory'));
  delete articleHistory[historyItem.id];

  localStorage.setItem('articleHistory', JSON.stringify(articleHistory));

  return {
    type: REMOVE_HISTORY,
    payload: historyItem,
  };
}

export function deleteHistory(historyItem) {
  localStorage.setItem('articleHistory', JSON.stringify({}));

  return {
    type: DELETE_HISTORY,
    payload: historyItem,
  };
}

export function changeDifficulty(difficulty) {
  return {
    type: CHANGE_DIFFICULTY,
    payload: difficulty,
  };
}

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
}

export function changeSortBy(sortBy) {
  return {
    type: CHANGE_SORTBY,
    payload: sortBy,
  };
}

export function setTranslator(translator, language) {
  return {
    type: SET_TRANSLATOR,
    payload: {
      translator,
      language,
    },
  };
}

export function setVisited(value) {
  return {
    type: SET_VISITED,
    payload: value,
  };
}

export function setLoading(value) {
  return {
    type: SET_LOADING,
    payload: value,
  };
}

export function changePageSize(pageSize) {
  return {
    type: CHANGE_PAGESIZE,
    payload: pageSize,
  };
}
