import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('app')
);
