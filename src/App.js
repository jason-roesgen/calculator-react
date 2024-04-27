import React from 'react';
import './App.css';
import CalculatorButtons from './CalculatorButtons'; 

function App() {

  const handleButtonClick = (label) => {
    // Implement your logic here based on the tips provided earlier
  };


  return (
    <div className="container">
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
