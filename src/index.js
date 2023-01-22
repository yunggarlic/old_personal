import React from 'react';
import { Fun, Simple } from './components';
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
