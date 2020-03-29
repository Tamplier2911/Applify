// import './AdminFeedbackCreate.scss'
import React from "react";

// components
import FeedbackCreate from "../FeedbackCreate/FeedbackCreate";

// JS Rendering CSS
import { AdminFeedbackCreateContainer } from "./AdminFeedbackCreateStyles";

const AdminFeedbackCreate = () => {
  return (
    <AdminFeedbackCreateContainer>
      <FeedbackCreate method="POST" />
    </AdminFeedbackCreateContainer>
  );
};

export default AdminFeedbackCreate;
