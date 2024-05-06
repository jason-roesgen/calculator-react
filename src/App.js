import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import CalculatorButtons from './CalculatorButtons'; 

function App() {
  const [input, setInput] = useState('')
  const handleButtonClick = (label) => {

    // if number clicked, append to input 
    if (!isNaN(label)) {
      setInput((prevInput) => prevInput + label);
    } else if (label === "AC") {
      setInput('');
      console.log("input: ", input);
    } else if (label === "C" ) {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (['+', '-', '*', '/'].includes(label)) {
      // if operator clicked, update to input to include the operator 
      if (!['+', '-', '*', '/'].includes(input.slice(-1))) {
        setInput((prevInput) => prevInput + label);
      }
    } else if (label === "=") {
      // if = button clicked, evaluate expression in input and update result 
      try {
        const result = eval(input);
        if (!isFinite(result)) {
          // Handle division by zero
          throw new Error("Es ist nicht möglich durch 0 zu dividieren!");
        }
        setInput(result.toString());
      } catch (error) {
        alert(error.message);
      }

    } else {
      alert("Funktion noch nicht verfügbar!");
    };
  };

  return (
    <div className="container">
      <TextField className="display" id="outlined-basic" variant="outlined" value={input}/>
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
