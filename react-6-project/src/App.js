import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newUser) => {
    setUserList((prevUserList) => [newUser, ...prevUserList]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList userList={userList} />
    </>
  );
}

export default App;
