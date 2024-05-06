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
      setInput((prevInput) => prevInput + label);
} else {
      alert("Fuktion noch nicht verfügbar");
    };

    // if operator clicked, update to input to include the operator 
    
    // if AC button clicked, clear both input and result
    
    // if C button clicked, clear last entry from input 
    
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
