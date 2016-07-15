import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/main';
import Home from '../components/home';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
