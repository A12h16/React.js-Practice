import React from "react";

const B = ({ handler, children }) => {
  console.log(`Rendered ${children}`);
  return (
    <div>
      <button onClick={handler}>{children}</button>
    </div>
  );
};

export default B;
