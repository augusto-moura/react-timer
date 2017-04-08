import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import 'style!css!foundation-sites/dist/foundation.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import 'style!css!sass!./styles/app.scss';

import Main from './components/Main';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app'),
);
