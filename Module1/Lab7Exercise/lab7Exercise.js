
// Lab Exercise 7

// Using the functions you created for Exercise 4:
// • Write a specification comment for each function
// • Write at least 3 unit tests for each function
// • In the unit tests, try to include both expected and non-typical
// test values (such as zero or negative numbers)


/**---------------------------------------------
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

//Unit test 
const sum1 = add(-3, 4)
 console.log (sum1);

const sum2 = add(0.5, 7)
 console.log (sum2);

const sum3 = add(0.5, -3)
 console.log (sum3);

/**--------------------------------------------
* Subtracts the second number from the first number.
*
* @param {number} a - The first number.
* @param {number} b - The second number.
* @returns {number} - The difference of the two numbers.
*/

function subtract(a, b) {
  return a - b;
}

//Unit test 
const difference1 = subtract(-3, 4)
 console.log (difference1);

const difference2 = subtract(0.5, 7)
 console.log (difference2);

const difference3 = subtract(0.5, -3)
 console.log (difference3);



/** ---------------------------------------
* Multiplies two numbers.
*
* @param {number} a - The first number.
* @param {number} b - The second number.
* @returns {number} - The product of the two numbers.
*/
function multiply(a, b) {
  return a * b;
}

//Unit test
const product1 = multiply(-3, 4)
  console.log (product1);

const product2 = multiply(0.5, 7)
  console.log (product2);
 
const product3 = multiply(0.5, -3)
  console.log (product3);
 

/**--------------------------------------------
* Divides the first number by the second number.
*
* @param {number} a - The first number.
* @param {number} b - The second number.
* @returns {number} - The quotient of the two numbers.
* @throws {Error} - Throws an error if the second number is zero.
*/
function divide(a, b) {
  if (b === 0) {
      throw new Error("Cannot divide by zero");
  }
  return a / b;
}

//Unit test
const qoutient1 = divide(-12, 4)
  console.log (qoutient1);

const qoutient2 = divide(49, 7)
  console.log (qoutient2);
 
const qoutient3 = divide(2, 0)
  console.log (qoutient3);




// practice on combining different operations


 /**
  * Calculate the perimeter of a rectangle
  * 
  *@param {number} width - The width must be a positive number.
  *@param {number} height - The height must be a positive number
  *@returns {number} Rectangle's perimeter
  *
  * @example 
  * const perimeter = calculateRectanglePerimeter (5,10);
  * console.log(perimeter);  //Output: 30
  * 
  * @throws {Error} If width or height is not a positive number.
  */

  function calculateRectanglePerimeter (width, height) { if (width <= 0 || height <= 0) {
      throw new Error ('Width and height must not be a negative number.')
  }
  return (width * 2) + (height * 2);
}

const perimeter = calculateRectanglePerimeter (5, 10)
console.log (perimeter);

const perimeter1 = calculateRectanglePerimeter (7, 2)
console.log (perimeter1);

const perimeter2 = calculateRectanglePerimeter (-3, 4)
 console.log (perimeter2);
 