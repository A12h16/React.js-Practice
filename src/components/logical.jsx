import React from "react";

const Logical = () => {
  const condition = true;
  return (
    <div>
      {condition && (
        <span>This content is rederend when condition is true</span>
      )}
    </div>
  );
};

export default Logical;
