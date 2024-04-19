import React from "react";

const C = ({ text, value }) => {
  console.log(`Rendered ${text}`);
  return (
    <div>
      {text}-{value}
    </div>
  );
};

export default C;
