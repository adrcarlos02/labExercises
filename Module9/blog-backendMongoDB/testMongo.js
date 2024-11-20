// testMongo.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully!');
  mongoose.connection.close();
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});