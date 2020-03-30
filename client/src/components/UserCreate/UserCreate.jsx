import "./UserCreate.scss";
import React from "react";

// components
import CreateUpdateUser from "../CreateUpdateUser/CreateUpdateUser";

// JS Rendering CSS
import {} from "./UserCreateStyles";

const UserCreate = () => {
  return (
    <div>
      <CreateUpdateUser method="POST" />
    </div>
  );
};

export default UserCreate;
