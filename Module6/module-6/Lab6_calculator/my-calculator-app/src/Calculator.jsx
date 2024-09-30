import React, { useState } from 'react';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [display, setDisplay] = useState('0');

  // Function to handle number input
  const inputNumber = (num) => {
    setCurrentInput((prev) => prev + num);
    setDisplay(currentInput + num);
  };

  // Function to handle operator input
  const inputOperator = (op) => {
    setFirstNumber(parseFloat(currentInput));
    setOperator(op);
    setCurrentInput(''); // Reset input for the second number
  };

  // Function to calculate the result
  const calculate = () => {
    setSecondNumber(parseFloat(currentInput));
    let result = 0;
    const num1 = firstNumber;
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Error';
    }

    setDisplay(result);
    setCurrentInput(''); // Reset after calculation
  };

  // Function to reset the calculator
  const resetCalculator = () => {
    setCurrentInput('');
    setFirstNumber(null);
    setOperator(null);
    setSecondNumber(null);
    setDisplay('0');
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        {/* Number buttons */}
        {[7, 8, 9].map((num) => (
          <button key={num} onClick={() => inputNumber(num.toString())} className="number">
            {num}
          </button>
        ))}
        <button className="operator" onClick={() => inputOperator('/')}>
          /
        </button>

        {[4, 5, 6].map((num) => (
          <button key={num} onClick={() => inputNumber(num.toString())} className="number">
            {num}
          </button>
        ))}
        <button className="operator" onClick={() => inputOperator('*')}>
          *
        </button>

        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => inputNumber(num.toString())} className="number">
            {num}
          </button>
        ))}
        <button className="operator" onClick={() => inputOperator('-')}>
          -
        </button>

        <button className="number" onClick={() => inputNumber('0')}>
          0
        </button>
        <button className="clear" onClick={resetCalculator}>
          C
        </button>
        <button className="equals" onClick={calculate}>
          =
        </button>
        <button className="operator" onClick={() => inputOperator('+')}>
          +
        </button>
      </div>
    </div>
  );
}

export default Calculator;