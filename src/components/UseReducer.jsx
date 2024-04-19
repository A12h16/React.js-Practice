//use Reducer example
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = {
    count: 0, //INITIAL STATE ALWAYS A Object
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default UseReducer;
