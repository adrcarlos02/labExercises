const userRoutes = require('./routes/userRoutes');
const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');

// Create app instances
const server1 = express();
const server2 = express();

// Define routes for each server
server1.get('/', (req, res) => {
    res.send('Server 1 - Running on Port 3000');
});

server2.get('/', (req, res) => {
    res.send('Server 2 - Running on Port 3001');
});

// Use the calculator routes for server1
server1.use('/calculator', calculatorRoutes);

// Serve static files
server1.use('/', express.static('public'));
server2.use('/', express.static('public'));

// Start both servers
server1.listen(3000, () => {
    console.log('Server 1 is running on port 3000');
});

server2.listen(3001, () => {
    console.log('Server 2 is running on port 3001');
});

server2.use('/users', userRoutes);