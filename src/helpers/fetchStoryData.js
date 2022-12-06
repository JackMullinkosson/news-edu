/* eslint-disable no-unused-vars */
import { extract } from 'article-parser';
import axios from 'axios';
/* eslint-disable no-useless-escape */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchStories = async (query, wordList, cocaWords) => {
  // const results = await axios.get(
  //   `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${API_KEY}`
  // );
  const results = await axios.get('./data.json');
  const { articles } = results.data;
  const formattedData = await formatData(articles, wordList, cocaWords);
  return formattedData;
};

function pullURLS(data) {
  const pulled = data.map((i) => i.url);
  return pulled;
}
let articlePromises;
async function extractArticles(data) {
  const extractedArticles = [];
  articlePromises = await data.map((i) => extract(i));
  await Promise.allSettled(articlePromises).then((data) => {
    data.map((article) => {
      if (article.status === 'rejected') return;
      const content = article.value.content.replaceAll('<', ' <');
      const parser = new DOMParser();
      const parsedArticle = parser.parseFromString(content, 'text/html');
      extractedArticles.push(parsedArticle.all[0].textContent);
    });
  });
  return extractedArticles;
}

async function getReadingLevelInfo(stories, wordList, cocaWords) {
  const storiesDifficulty = [];
  stories.forEach((j) => {
    const splitStory = j
      .toLowerCase()
      .trim()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const noHyphens = splitStory.replaceAll('—', ' ').split(' ');
    const filteredStory = noHyphens.filter((el) => el !== '');
    const [cocaBeginnerRank, cocaIntermediateRank] = [1000, 3000];
    const wordCount = filteredStory.reduce(
      (acc, i) => {
        if (wordList.wordForms.includes(i)) {
          const index = wordList.wordForms.indexOf(i);
          if (cocaWords.includes(wordList.lemmas[index])) {
            const cocaIndex = cocaWords.indexOf(wordList.lemmas[index]);
            if (cocaIndex <= cocaBeginnerRank) {
              acc.beginner += 1;
            } else if (cocaIndex <= cocaIntermediateRank) {
              acc.intermediate += 1;
              if (
                !acc?.intermediateWordsArr.includes(wordList.wordForms[index])
              ) {
                acc.intermediateWordsArr.push(wordList.wordForms[index]);
              }
            } else if (cocaIndex !== -1) {
              acc.advanced += 1;
              if (!acc?.advancedWordsArr.includes(wordList.wordForms[index])) {
                acc.advancedWordsArr.push(wordList.wordForms[index]);
              }
            }
          }
        }
        return acc;
      },
      {
        beginner: 0,
        intermediate: 0,
        advanced: 0,
        intermediateWordsArr: [],
        advancedWordsArr: [],
        total: filteredStory.length + 1,
      }
    );
    storiesDifficulty.push(wordCount);
  });
  return storiesDifficulty;
}

const formatData = async (articles, wordList, cocaWords) => {
  const pulledURLS = pullURLS(articles);
  const extractedArticles = await extractArticles(pulledURLS);
  const storiesDifficulty = await getReadingLevelInfo(
    extractedArticles,
    wordList,
    cocaWords
  );
  let extractedHTML;
  await Promise.allSettled(articlePromises).then((data) => {
    if (data.status === 'rejected') return;
    extractedHTML = data;
  });
  const storiesWithInfo = storiesDifficulty.reduce((acc, item, index) => {
    acc[Date.parse(articles[index].publishedAt)] = {
      id: Date.parse(articles[index].publishedAt) || '',
      url: articles[index].url || '',
      title: articles[index].title || '',
      author: articles[index].author || '',
      image: articles[index].urlToImage || '',
      description: articles[index].description || '',
      source: articles[index].source.name || '',
      htmlContent: extractedHTML[index].value?.content || '',
      advancedWordsString:
        storiesDifficulty[index].advancedWordsArr
          .join(', ')
          .substring(0, 130) || '',
      advancedWordsArr: storiesDifficulty[index].advancedWordsArr || '',
      intermediateWordsArr: storiesDifficulty[index].intermediateWordsArr || '',
      wordCount: storiesDifficulty[index].total || '',
      beginnerWords:
        storiesDifficulty[index].beginner / storiesDifficulty[index].total ||
        '',
      intermediateWords:
        storiesDifficulty[index].intermediate /
          storiesDifficulty[index].total || '',
      advancedWords:
        storiesDifficulty[index].advanced / storiesDifficulty[index].total ||
        '',
      super:
        storiesDifficulty[index].super / storiesDifficulty[index].total || '',
      intermediateAndAdvancedWords:
        (storiesDifficulty[index].intermediate +
          storiesDifficulty[index].advanced) /
          storiesDifficulty[index].total || '',
    };
    return acc;
  }, {});
  const notPromiesed = storiesWithInfo;
  return notPromiesed;
};
