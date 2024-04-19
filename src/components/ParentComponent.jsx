//useCall back hook
import React, { useCallback, useState } from "react";
import T from "./T";
import B from "./B";
import C from "./C";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <>
      <T text="Use call hook" />
      <C text="Age" value={age} />
      <B handler={incrementAge}>Increment</B>
      <C text="Salary" value={salary} />
      <B handler={incrementSalary}>Decrement</B>
    </>
  );
};

export default ParentComponent;
