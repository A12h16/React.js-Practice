import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 2);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <>
      <hr></hr>
      <h1>UseMemo</h1>
      <div>
        <button onClick={incrementCounter1}>Counter1-{counter1}</button>
      </div>
      <button onClick={incrementCounter2}> Counter2-{counter2}</button>
      <span>{isEven() ? "Even" : "odd"}</span>
    </>
  );
};

export default UseMemo;
