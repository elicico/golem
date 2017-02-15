/* --------- constants ------------------------------------------- */

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

/* --------- initial state ------------------------------------------- */

const initialState = {
  number: 1,
};

/* --------- action creators ------------------------------------------- */

export function increase(n) {
  return {
    type: INCREASE,
    amount: n,
  };
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n,
  };
}

/* --------- reducer ------------------------------------------- */

export default function update(state = initialState, action) {
  if (action.type === INCREASE) {
    return { number: state.number + action.amount };
  } else if (action.type === DECREASE) {
    return { number: state.number - action.amount };
  }
  return state;
}
