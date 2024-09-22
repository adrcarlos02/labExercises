// controllers/calculatorController.js

exports.add = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const sum = number1 + number2;
  res.json({ result: sum });
};

exports.subtract = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const difference = number1 - number2;
  res.json({ result: difference });
};

exports.multiply = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const product = number1 * number2;
  res.json({ result: product });
};

exports.divide = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  if (number2 === 0) {
      res.json({ error: 'Cannot divide by zero' });
  } else {
      const quotient = number1 / number2;
      res.json({ result: quotient });
  }
};