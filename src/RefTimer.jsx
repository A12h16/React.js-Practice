import React, { useEffect, useRef, useState } from "react";

const RefTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <hr />
      <h1>UseRef example</h1>
      use ref timmer={timer}
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
    </div>
  );
};

export default RefTimer;
