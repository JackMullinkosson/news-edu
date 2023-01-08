import _ from 'lodash';

const advanced = 0.08;
const intermediate = 0.12;

const sortStories = (articleData, sort) => {
  const sortDifficulty = sort.difficulty;
  const sortedByDifficulty = sortByDifficulty(articleData, sortDifficulty);

  const sortByMethod = sort.sortBy;
  const sortedBySortByMethodAndDifficulty = sortBySortByMethod(
    sortedByDifficulty,
    sortByMethod
  );

  return sortedBySortByMethodAndDifficulty;
};

const sortByDifficulty = (articleData, sortDifficulty) => {
  if (sortDifficulty === 'default') {
    return _.map(articleData, (article) => article);
  }

  if (sortDifficulty === 'beginner') {
    const beginnerArticles = _.filter(
      articleData,
      (article) => article.intermediateAndAdvancedWords <= intermediate
    );
    return beginnerArticles;
  }
  if (sortDifficulty === 'intermediate') {
    return _.filter(
      articleData,
      (article) =>
        article.intermediateAndAdvancedWords > intermediate &&
        article.advancedWords < advanced
    );
  }
  if (sortDifficulty === 'advanced') {
    return _.filter(
      articleData,
      (article) => article.advancedWords >= advanced
    );
  }
};

const sortBySortByMethod = (articles, sortByMethod) => {
  if (sortByMethod === 'default') {
    return articles;
  }

  if (sortByMethod === 'beginnerToAdvanced') {
    return _.sortBy(
      articles,
      (article) => article.intermediateAndAdvancedWords
    );
  }

  if (sortByMethod === 'advancedToBeginner') {
    return _.sortBy(
      articles,
      (article) => -article.intermediateAndAdvancedWords
    );
  }
};

export default sortStories;
