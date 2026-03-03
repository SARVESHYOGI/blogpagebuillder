import React from "react";
type ReviewProps = {
  name: string;
  message: string;
};

export const Review: React.FC<ReviewProps> = ({ name, message }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <p>"{message}"</p>
      <strong>- {name}</strong>
    </div>
  );
};
