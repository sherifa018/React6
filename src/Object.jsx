import React, { useState } from "react";
function UserList() {
  // List of users
  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Alice", age: 22 },
  ]);
  //   Function to edit user details
  const editUser = (id) => {
    const newName = prompt("Enter new name:");
    const newAge = prompt("Enter new age:");
    const updatedUsers = [...users]; // Create a copy of the users array
    for (let i = 0; i < updatedUsers.length; i++) {
      if (updatedUsers[i].id === id) {
        updatedUsers[i].name = newName || updatedUsers[i].name;
        updatedUsers[i].age = newAge || updatedUsers[i].age;
        break; // Stop the loop once the user is updated
      }
    }
    setUsers(updatedUsers); // Update the state
  };
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Age: {user.age}){" "}
            <button onClick={() => editUser(user.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
