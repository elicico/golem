import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

export default function App({ children }) {
  return (
    <div className="app">
      <header className="nav">
        <Link to="/" className="nav__item">home</Link>
        <Link to="/foo" className="nav__item">foo</Link>
        <Link to="/bar" className="nav__item">bar</Link>
      </header>
      <button
        className="nav--foobutton"
        onClick={() => browserHistory.push('/foo')}
      >
        Go to /foo
      </button>
      <div style={{ marginTop: '25px' }}>{children}</div>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.element,
};
