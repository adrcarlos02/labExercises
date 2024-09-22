// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
  // Generate random numbers for testing
  let number1 = Math.floor(Math.random() * 1000);
  let number2 = Math.floor(Math.random() * 1000);

  // Test the addition route
  test('GET /calculator/add => sum of numbers', () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  // Test the subtraction route
  test('GET /calculator/subtract => difference of numbers', () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  // Test the multiplication route
  test('GET /calculator/multiply => product of numbers', () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });

  // Test the division route
  test('GET /calculator/divide => quotient of numbers', () => {
    if (number2 !== 0) {
      return request(app)
        .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual({
            result: number1 / number2,
          });
        });
    } else {
      // Test for divide by zero scenario
      return request(app)
        .get(`/calculator/divide?num1=${number1}&num2=0`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual({
            error: 'Cannot divide by zero',
          });
        });
    }
  });
});