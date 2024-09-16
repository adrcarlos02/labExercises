const express = require('express');
const router = express.Router();
// new route for adding two numbers
/*router.get('/add', (req, res) => {
   res.send('Add')
})
module.exports = router;

router.get('/add', (req, res) => {
   console.log(req.query)
   res.send(req.query)
});
*/

// Add route
router.get('/add', (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    const sum = number1 + number2;
    console.log(`Addition: ${number1} + ${number2} = ${sum}`);  // Log result in terminal
    res.json({ result: sum });
});

// Subtract route
router.get('/subtract', (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    const difference = number1 - number2;
    console.log(`Subtraction: ${number1} - ${number2} = ${difference}`);  // Log result in terminal
    res.json({ result: difference });
});

// Multiply route
router.get('/multiply', (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    const product = number1 * number2;
    console.log(`Multiplication: ${number1} * ${number2} = ${product}`);  // Log result in terminal
    res.json({ result: product });
});

// Divide route
router.get('/divide', (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (number2 === 0) {
        console.log(`Division error: Cannot divide by zero`);
        res.json({ error: 'Cannot divide by zero' });
    } else {
        const quotient = number1 / number2;
        console.log(`Division: ${number1} / ${number2} = ${quotient}`);  // Log result in terminal
        res.json({ result: quotient });
    }
});

module.exports = router;