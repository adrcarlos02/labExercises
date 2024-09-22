// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hipkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
];

// get information about this request from the headers
router.get('/headers', (req, res) => {
  console.log(req.headers)
  res.json(req.headers)
})


/*

req.headers is an object that includes information about the request, including session data, cookies, the type of agent sending the request, any particular caching protocol, and potentially also things like authentication tokens.

In Express, the order in which routes are defined in the code matters because Express matches routes sequentially. When a request is made, Express will go through the defined routes in the order they are registered in the code. It will use the first matching route it finds and ignore the rest. This concept is known as “route precedence.”

*/ 

// Dynamic request param endpoint - get the user matching the specific ID ie. /users/3
router.get('/:id', (req, res) => {
    console.log('Request received:',req.params);
    let userId = parseInt(req.params.id); // 'id' will be the value matching anything after /users/
    let user = users.find(user => user.id === userId);
    user ? res.status(200).json({result: user})
         : res.status(404).json({result: `User ${userId} not found`});
});

// a POST request with data sent in the body of the request, representing a new user
router.post('/', (req, res) => {
    let newUser = req.body; // first update index.js
    console.log(newUser)
    // we can add some validation as well
    if (!newUser.name || !newUser.location) {
        res.status(500).json({error: 'User must contain a name and location'});
        return;
    }
    else if (!newUser.id) { // if no ID, generate one
        newUser.id = users.length + 1;
    }
    // if the new user is valid, add them to the list
    users.push(newUser)
    res.status(200).json(newUser) // return the new user
});


module.exports = router;