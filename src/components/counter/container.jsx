/* ---------------- imports --------------------------------------------------------- */

import { connect } from 'react-redux';
import { increase, decrease } from '../../modules/count';
import View from './view.jsx';

/* ---------------- props mapping ---------------------------------------------------- */

const mapStateToProps = (state) => {
  return {
    number: state.count.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseProp: n => dispatch(increase(n)),
    decreaseProp: n => dispatch(decrease(n)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
