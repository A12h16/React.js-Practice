import React, { useEffect, useState } from "react";
import User from "./User";
//EReact list example
const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function abc() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }
    console.log("hhhhhhhh", users);
    abc();
  }, []);

  return (
    <div>
      <h1>React List </h1>

      <ul>
        {users && (
          <>
            {users.map((user, index) => (
              <User key={index} user={user} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Users;
