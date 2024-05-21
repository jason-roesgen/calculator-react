import React from "react";
import "./components/Button.css"; // Import CSS for styling

const CalculatorButtons = ({ onButtonClick }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "AC",
    "C",
  ];

  return (
    <div className="calculator-frame">
      {buttons.map((label, index) => (
        <button
          key={index}
          className="button"
          onClick={() => onButtonClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CalculatorButtons;
