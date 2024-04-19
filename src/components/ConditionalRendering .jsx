import React from "react";

const ConditionRendering = () => {
  const condition = true;

  const renderedContent = () => {
    if (condition) {
      return <span> true</span>;
    } else {
      return <span>false</span>;
    }
  };

  return <div>{renderedContent}</div>;
};

export default ConditionRendering;
