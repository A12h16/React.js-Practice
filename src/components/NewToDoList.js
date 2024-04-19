import React, { useState } from "react";

const NewToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const handleAddToDo = () => {
    if (newTodos.trim() !== "") {
      setTodos([...todos, { text: newTodos.trim(), checked: false }]);
      setNewTodos("");
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodos}
        onChange={(e) => {
          setNewTodos(e.target.value);
        }}
      ></input>
      <button onClick={handleAddToDo}>Add</button>
      {/* lists */}
      <ul></ul>
    </div>
  );
};

export default NewToDoList;
