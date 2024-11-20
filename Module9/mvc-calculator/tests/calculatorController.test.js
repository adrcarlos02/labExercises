// tests/calculatorController.test.js

import request from 'supertest';
import express from 'express';
import calculatorRoutes from '../routes/calculatorRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/calculator', calculatorRoutes);

describe('Calculator Controller', () => {
  
  // Test for Addition
  describe('GET /api/calculator/add', () => {
    test('should return sum of two numbers', async () => {
      const response = await request(app)
        .get('/api/calculator/add') // Added leading slash
        .query({ num1: 5, num2: 3 });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ result: 8 });
    });

    test('should handle invalid input', async () => {
      const response = await request(app)
        .get('/api/calculator/add') // Added leading slash
        .query({ num1: 'a', num2: 3 });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Test for Subtraction
  describe('GET /api/calculator/subtract', () => {
    test('should return difference of two numbers', async () => {
      const response = await request(app)
        .get('/api/calculator/subtract') // Corrected route
        .query({ num1: 10, num2: 4 });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ result: 6 });
    });

    test('should handle invalid input', async () => {
      const response = await request(app)
        .get('/api/calculator/subtract') // Corrected route
        .query({ num1: 'b', num2: 4 });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Test for Multiplication
  describe('GET /api/calculator/multiply', () => {
    test('should return product of two numbers', async () => {
      const response = await request(app)
        .get('/api/calculator/multiply') // Corrected route
        .query({ num1: 6, num2: 7 });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ result: 42 });
    });

    test('should handle invalid input', async () => {
      const response = await request(app)
        .get('/api/calculator/multiply') // Corrected route
        .query({ num1: 6, num2: 'c' });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Test for Division
  describe('GET /api/calculator/divide', () => {
    test('should return quotient of two numbers', async () => {
      const response = await request(app)
        .get('/api/calculator/divide') // Corrected route
        .query({ num1: 20, num2: 4 });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ result: 5 });
    });

    test('should handle division by zero', async () => {
      const response = await request(app)
        .get('/api/calculator/divide') // Corrected route
        .query({ num1: 20, num2: 0 });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error', 'Division by zero is not allowed.');
    });

    test('should handle invalid input', async () => {
      const response = await request(app)
        .get('/api/calculator/divide') // Corrected route
        .query({ num1: 'd', num2: 4 });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

});