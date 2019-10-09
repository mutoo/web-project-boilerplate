import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div>Login, please!</div>
          <Link to="/">Back to home</Link>
        </Route>
        <Route path="/profile">
          <div>Hello, Friends!</div>
        </Route>
        <Route path="/">
          <div>Hello, React!</div>
          <Link to="/login">Login</Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
