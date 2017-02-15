/* ---------------- imports --------------------------------------------------------- */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { store, history } from './store';

import App from '../components/app';
import Counter from '../components/counter';
import Foo from '../components/foo';

/* ---------------- root view --------------------------------------------------------- */

export default function Root() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Counter} />
              <Route path="/foo" component={Foo} />
            </Route>
          </Router>
        </div>
      </Provider>
    </div>
  );
}
