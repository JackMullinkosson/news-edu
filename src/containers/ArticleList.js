import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import ArticleListItem from './ArticleListItem';
import sortArticles from '../helpers/sortArticleData';
import ErrorPage from '../components/ErrorPage';
import NoResults from '../components/NoResults';
/* eslint-disable react/prop-types */

const ArticleList = ({ history }) => {
  const stories = useSelector((state) => state.articles);
  const sort = useSelector((state) => state.sort);

  if (!stories) {
    return <ErrorPage />;
  }

  if (stories === 'no articles') {
    return <NoResults />;
  }

  const sortedArticles = sortArticles(stories, sort);
  console.log('storted', sortedArticles);

  const renderArticleListItems = () => {
    if (sortedArticles.length === 0) {
      return 'No articles found at that level. Try expanding your search results or changing the difficulty level.';
    }
    return sortedArticles.map((article) => (
      <ArticleListItem history={history} key={article.id} id={article.id} />
    ));
  };
  return (
    <div className="search-results-box">
      <table className="table">{renderArticleListItems()}</table>
    </div>
  );
};

export default ArticleList;
