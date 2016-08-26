import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Foo from './components/Foo.jsx';
import Bar from './components/Bar.jsx';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(browserHistory, store);

const Root = function () {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="foo" component={Foo} />
              <Route path="bar" component={Bar} />
            </Route>
          </Router>
        </div>
      </Provider>
    </div>
  );
};

export default Root;
