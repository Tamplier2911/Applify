// import "./UserCreate.scss";
import React from "react";

// components
import CreateUpdateUser from "../CreateUpdateUser/CreateUpdateUser";

// JS Rendering CSS
import { UserCreateContainer } from "./UserCreateStyles";

const UserCreate = () => {
  return (
    <UserCreateContainer data-test="user-create">
      <CreateUpdateUser data-test="user-create-update" method="POST" />
    </UserCreateContainer>
  );
};

export default UserCreate;
