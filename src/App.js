import React, { useState } from 'react';
import './App.css';
import CalculatorButtons from './CalculatorButtons'; 

function App() {
  // use useState of react ->
  // input and setInput
  // result and setResult
  //
  // add somehow the different values to those states

  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const handleButtonClick = (label) => {
    // Implement your logic here based on the tips provided earlier

    // if number clicked, append to input 
    if (!isNaN(label)) {
      const newInput = label;
      setInput(newInput);

      console.log("input", input);
      console.log("newInput", newInput);
      console.log("result", result);
    } else {
      alert("i see u :icu:");
    };

    // if operator clicked, update to input to include the operator 
    
    // if AC button clicked, clear both input and result
    
    // if C button clicked, clear last entry from input 
    
    // if = button clicked, evaluate expression in input and update result 
    

  };


  return (
    <div className="container">
      <div className='display'>{input}</div>
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
