import React from "react";
import Child from "./Child";

const Parent = () => {
  const message = "Hello Parent";
  return (
    <div>
      <Child greeting={message} />
    </div>
  );
};

export default Parent;
