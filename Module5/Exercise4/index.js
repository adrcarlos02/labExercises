const express = require("express"); // import the express package
const friendRoutes = require('./routes/friendRoutes');

const app = express(); // create a new app
const port = 3003; // change this to run the app on a different port - usually a 4 digit number

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
