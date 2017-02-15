/* ---------------- imports --------------------------------------------------------- */

import { createStore, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as modules from '../modules';

/* ---------------- configure store --------------------------------------------------------- */

const reducer = combineReducers({
  ...modules,
  routing: routerReducer,
});

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

/* ---------------- configure history --------------------------------------------------------- */

const history = syncHistoryWithStore(browserHistory, store);

/* ---------------- exports --------------------------------------------------------- */

module.exports = {
  store,
  history,
};
