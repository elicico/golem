/* ---------------- imports --------------------------------------------------------- */

import { connect } from 'react-redux';
import View from './view.jsx';

/* ---------------- props mapping ---------------------------------------------------- */

const mapStateToProps = (state) => {
  const activePath = window.location.pathname;
  return {
    navItems: state.navigation.navItems,
    activePath,
  };
};

export default connect(
  mapStateToProps,
)(View);
