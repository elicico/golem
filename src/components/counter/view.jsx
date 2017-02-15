import React, { PropTypes } from 'react';

function View({ number, increaseProp, decreaseProp }) {
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

View.defaultProps = {
  number: 0,
  increaseProp: null,
  decreaseProp: null,
};

View.propTypes = {
  number: PropTypes.number,
  increaseProp: PropTypes.func,
  decreaseProp: PropTypes.func,
};

export default View;
