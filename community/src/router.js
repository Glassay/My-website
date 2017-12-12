import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './layouts/LoginLayout';
import MainLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/m" exact component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
