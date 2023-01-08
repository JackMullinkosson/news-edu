/* eslint-disable react/prop-types */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HistoryListItem from '../containers/HistoryListItem';
import { deleteHistory } from '../actions';

const History = ({ history }) => {
  const stories = useSelector((state) => state.history);

  const renderArticleListItems = () =>
    _.map(stories, (article, articleId) => (
      <HistoryListItem key={articleId} id={articleId} history={history} />
    ));

  const dispatch = useDispatch();

  const deleteHandler = () => dispatch(deleteHistory());

  return (
    <>
      <Button as={Link} to="/" className="back-button">
        Back
      </Button>
      {_.isEmpty(stories) ? (
        <h5 className="history-message">No Search History...</h5>
      ) : (
        <button
          className="clear-history-button btn btn-info"
          type="button"
          onClick={deleteHandler}
        >
          Clear History
        </button>
      )}
      <div className="search-results-box">
        <table className="table">{renderArticleListItems()}</table>
      </div>
    </>
  );
};

export default History;
