import React from 'react';
import { Fun, Simple } from './components';
import './styles/index.less';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/fun">
          <Fun />
        </Route>
        <Route path="/">
          <Simple />
        </Route>
      </Switch>
    </Router>
  );
}
