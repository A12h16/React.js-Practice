import React from "react";
import { useContext } from "react";
import { myContext, myContext1 } from "../App";

const Child = (props) => {
  const value = useContext(myContext);
  const value1 = useContext(myContext1);
  console.log("lll", value);

  console.log(props);

  return (
    <>
      <div>{props.greeting}</div>
      <h1>{value}</h1>
      <h1>{value1}</h1>
    </>
  );
};

export default Child;
