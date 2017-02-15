/* ---------------- imports --------------------------------------------------------- */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

/* ---------------- component view --------------------------------------------------------- */

export default function View({ children, navItems, activePath }) {
  const renderNav = (navItem) => {
    const navItemStyle = classNames({
      nav__item: true,
      active: navItems[navItem] === activePath,
    });
    return (
      <Link
        key={navItem}
        to={navItems[navItem]}
        className={navItemStyle}
      >
        {navItem}
      </Link>
    );
  };

  return (
    <div className="app">
      <header className="nav">
        { Object.keys(navItems).map(renderNav) }
      </header>
      <div style={{ marginTop: '25px' }}>{children}</div>
    </div>
  );
}

View.defaultProps = {
  children: null,
  navItems: null,
  activePath: '',
};

View.propTypes = {
  children: PropTypes.element,
  navItems: PropTypes.object,
  activePath: PropTypes.string,
};
