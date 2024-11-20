// models/calculatorModel.js

//Why is this important?
//Handles calculator operations and business logics

class CalculatorModel {
  add(a,b){
   return a + b;
  }

  subtract(a,b){
    return a - b;
  }

  multiply(a,b){
    return a * b;
  }

  divide(a,b){
    if (b===0){
      throw new Error('Cannot divide by zero')
    }
    return a / b;
  }

  generateRandomId(){
    return Math.floor(Math.random() * 1000000);
  }
}

export default new CalculatorModel();

//How does this work?
//Defines a CalculatorModel class with methods for basic arithmetic operations
//Includes a method to generate a random ID for logging purposes.
//Exports an instance of the class for reuse across the application.