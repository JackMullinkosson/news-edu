import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from '../containers/ArticleList';
/* eslint-disable react/prop-types */

const Home = ({ history }) => <ArticleList history={history} />;

export default Home;
