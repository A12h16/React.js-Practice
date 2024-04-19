import React, { useState } from "react";

const Forms = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("Entered value is:", inputValue);
  };

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handelSubmit}>
        <label>Enter Text</label>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default Forms;
