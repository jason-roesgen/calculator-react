import React from "react";
import "./Button.css"; // Import CSS for styling

const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
