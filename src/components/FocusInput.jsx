import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef example</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
};

//before the input box will not be focused , on;y focuesd when mouse pointed on it
//after using useRef input box will be focused when page is loaded

export default FocusInput;
