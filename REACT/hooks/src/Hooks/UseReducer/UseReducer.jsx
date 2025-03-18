import React, { useReducer } from 'react';

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };

  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-light">{count}</h1>

      <button
        className="btn btn-outline-info px-5 rounded-5 fw-bold text-uppercase mx-2"
        disabled={count > 4}
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>

      <button
        className="btn btn-outline-warning px-5 rounded-5 fw-bold text-uppercase mx-2"
        disabled={count < 1}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
