// import './AdminFeedbackCreate.scss'
import React from "react";

// components
import FeedbackCreate from "../FeedbackCreate/FeedbackCreate";

// JS Rendering CSS
import { AdminFeedbackCreateContainer } from "./AdminFeedbackCreateStyles";

const AdminFeedbackCreate = () => {
  return (
    <AdminFeedbackCreateContainer data-test="admin-fb-create">
      <FeedbackCreate method="POST" data-test="admin-fb-create-child" />
    </AdminFeedbackCreateContainer>
  );
};

export default AdminFeedbackCreate;
