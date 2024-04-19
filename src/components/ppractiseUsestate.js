import React, { useEffect, useReducer, useState } from "react";

const UseStateCount = () => {
  //   const [count, setCount] = useState();
  //   return (
  //     <div>
  //       <hr />
  //       <h2>my prctise</h2>
  //       <p>Count:{count}</p>
  //       <button
  //         onClick={() => {
  //           setCount(count + 1);
  //         }}
  //       >
  //         increment
  //       </button>
  //       <button
  //         onClick={() => {
  //           setCount(count - 1);
  //         }}
  //       >
  //         decrement
  //       </button>
  //       <button
  //         onClick={() => {
  //           setCount(0);
  //         }}
  //       >
  //         reset
  //       </button>
  //     </div>
  //   );
  //   const [data, setData] = useState();
  //   const handelOnchange = (event) => {
  //     setData(event.target.value);
  //   };
  //   console.log(data);
  //   const handelSubmit = (event) => {
  //     event.preventDefault();
  //     window.alert("form submited sucessfully");
  //   };
  //   return (
  //     <div>
  //       <h1>my form</h1>
  //       <form onSubmit={handelSubmit}>
  //         <lable>Enter the test</lable>
  //         <input type="text" value={data} onChange={handelOnchange}></input>
  //         <button type="submit">submit</button>
  //       </form>
  //     </div>
  //   );
  const [users, setUsers] = useState();

  useEffect(() => {
    async function data() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUsers(result);
    }
    data();
  }, []);
  console.log("va22", users);

  return (
    <div>
      <p>my practice</p>
      <ul>
        {users && (
          <>
            {users.map((user, index) => {
              return <li key={index}>{user.name}</li>;
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default UseStateCount;
