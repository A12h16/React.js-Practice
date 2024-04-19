///example for useState
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
};

export default Count;
