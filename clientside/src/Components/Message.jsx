import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ children }) => {
  return (
    <div>
      <Alert variant="light">{children}</Alert>
    </div>
  );
};

export default Message;
