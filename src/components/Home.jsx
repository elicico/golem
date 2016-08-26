import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/count';

function Home({ number, increaseProp, decreaseProp }) {
  return (
    <div className="home">
      <button
        onClick={() => decreaseProp(1)}
        className="home__decrease"
      >
        decrease
      </button>
      <div className="home__num">
        {number}
      </div>
      <button
        onClick={() => increaseProp(1)}
        className="home__increase"
      >
        increase
      </button>
    </div>
  );
}

Home.propTypes = {
  number: PropTypes.number,
  increaseProp: PropTypes.func,
  decreaseProp: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    number: state.count.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseProp: (n) => dispatch(increase(n)),
    decreaseProp: (n) => dispatch(decrease(n)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
