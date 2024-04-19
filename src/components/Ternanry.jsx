import React from "react";

const Ternanry = () => {
  const condition = false;
  return (
    <div>
      {condition ? <span>Conditon true</span> : <span>Condition false</span>}
    </div>
  );
};

export default Ternanry;
