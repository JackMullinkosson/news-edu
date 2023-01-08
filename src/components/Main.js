import { Switch, Route } from 'react-router-dom';
import Saved from './Saved';
import Home from './Home';
import Article from '../containers/Article';
import History from './History';

const Main = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={(routerProps) => <Home history={routerProps.history} />}
    />
    <Route
      exact
      path="/history"
      render={(routerProps) => <History history={routerProps.history} />}
    />
    <Route
      path="/history/:articleId"
      render={(routerProps) => (
        <Article articleLocation="history" history={routerProps.history} />
      )}
    />
    <Route
      exact
      path="/saved"
      render={(routerProps) => <Saved history={routerProps.history} />}
    />
    <Route
      path="/saved/:articleId"
      render={(routerProps) => (
        <Article articleLocation="saved" history={routerProps.history} />
      )}
    />
    <Route
      path="/:articleId"
      render={(routerProps) => (
        <Article articleLocation="articles" history={routerProps.history} />
      )}
    />
    <Route exact path="/" render={() => <Home />} />
    <Route path="/article/:articleId" render={() => <Article />} />
  </Switch>
);

export default Main;
