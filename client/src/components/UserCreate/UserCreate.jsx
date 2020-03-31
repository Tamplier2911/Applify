// import "./UserCreate.scss";
import React from "react";

// components
import CreateUpdateUser from "../CreateUpdateUser/CreateUpdateUser";

// JS Rendering CSS
import { UserCreateContainer } from "./UserCreateStyles";

const UserCreate = () => {
  return (
    <UserCreateContainer>
      <CreateUpdateUser method="POST" />
    </UserCreateContainer>
  );
};

export default UserCreate;
