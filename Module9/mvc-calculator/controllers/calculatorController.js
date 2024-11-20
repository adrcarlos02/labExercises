// controllers/calculatorController.js
//Why do we have this?
//Processes incoming requests, interacts with the Model, and sends responses to the View.

import calculatorModel from "../models/calculatorModel.js";
import logger from '../logger.js';

export const add = (req, res) => {
  try {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid input: num1 and num2 must be numbers.");
    }

    const sum = calculatorModel.add(number1, number2);
    const id = calculatorModel.generateRandomId();
    logger.log(id, 'Addition', sum);
    res.json({ result: sum });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const subtract = (req, res) => {
  try {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid input: num1 and num2 must be numbers.");
    }

    const difference = calculatorModel.subtract(number1, number2);
    const id = calculatorModel.generateRandomId();
    logger.log(id, 'Subtraction', difference);
    res.json({ result: difference });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const multiply = (req, res) => {
  try {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid input: num1 and num2 must be numbers.");
    }

    const product = calculatorModel.multiply(number1, number2);
    const id = calculatorModel.generateRandomId();
    logger.log(id, 'Multiplication', product);
    res.json({ result: product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const divide = (req, res) => {
  try {
    const number1 = parseFloat(req.query.num1);
    const number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid input: num1 and num2 must be numbers.");
    }

    if (number2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    const quotient = calculatorModel.divide(number1, number2);
    const id = calculatorModel.generateRandomId();
    logger.log(id, 'Division', quotient);
    res.json({ result: quotient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//How does this work?
// •	Import Statements:
//      Imports the calculatorModel to perform calculations.
//      Imports the logger utility to log operations.
// •	Exported Functions:
//      Each function (add, subtract, multiply, divide) handles a specific calculator operation.
//      Parses query parameters num1 and num2.
//      Performs the calculation using the Model.
//      Generates a random ID and logs the operation.
//      Sends a JSON response with the result or an error message.