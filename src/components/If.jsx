import React from "react";

const If = () => {
  const condition = true;
  if (condition) {
    return <div>Condition is true</div>;
  } else {
    return <div>Condition is false</div>;
  }
};

export default If;
