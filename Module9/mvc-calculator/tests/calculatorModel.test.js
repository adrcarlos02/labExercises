// tests/calculatorModel.test.js

//Why do this?
// Tests:
// •	Verifies each arithmetic operation.
// •	Checks error handling for division by zero.
// •	Ensures that generateRandomID returns a valid number within the expected range.


import calculatorModel from "../models/calculatorModel.js";

describe('CalculatorModel', () => {
  test('adds two numbers correctly', () => {
    expect(calculatorModel.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculatorModel.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculatorModel.multiply(4, 3)).toBe(12);
  });

  test('divides two numbers correctly', () => {
    expect(calculatorModel.divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => {
      calculatorModel.divide(10, 0);    
    }).toThrow('Cannot divide by zero');
  });

  test('generates a random ID', () => {
    const id = calculatorModel.generateRandomId();
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThanOrEqual(0);
    expect(id).toBeLessThan(1000000);
  });
});

