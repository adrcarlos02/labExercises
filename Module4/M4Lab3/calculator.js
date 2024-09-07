let currentInput = '';
let firstNumber = null;
let operator = null;
let secondNumber = null;

const display = document.getElementById('display');

// Function to handle number input
function inputNumber(num) {
  currentInput += num;
  display.innerText = currentInput;
}

// Function to handle operator input
function inputOperator(op) {
  firstNumber = parseFloat(currentInput);
  operator = op;
  currentInput = ''; // Reset input for the second number
}

// Function to calculate the result
function calculate() {
  secondNumber = parseFloat(currentInput);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }
  display.innerText = result;
  currentInput = ''; // Reset after calculation
}

// Function to reset the calculator
function resetCalculator() {
  currentInput = '';
  firstNumber = null;
  operator = null;
  secondNumber = null;
  display.innerText = '0';
}

// Event listeners for buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    inputNumber(button.innerText);
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    inputOperator(button.innerText);
  });
});

document.querySelector('.equals').addEventListener('click', calculate);

document.querySelector('.clear').addEventListener('click', resetCalculator);