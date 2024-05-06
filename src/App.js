import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import CalculatorButtons from './CalculatorButtons'; 

function App() {
  const [input, setInput] = useState('')
  const handleButtonClick = (label) => {

    // if number clicked, append to input 
    if (!isNaN(label)) {
      const newInput = input + label;
      setInput(newInput);
    } else if (label === "AC") {
      setInput('');
      console.log("input: ", input);
    } else if (label === "C" ) {
        const newInput = input.slice(0, -1);
        setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      alert("Fuktion noch nicht verfügbar");
    };
    // if operator clicked, update to input to include the operator 
    
    // if = button clicked, evaluate expression in input and update result 
  };

  return (
    <div className="container">
      <TextField className="display" id="outlined-basic" variant="outlined" value={input}/>
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
