require('dotenv').config();
const express = require('./src/services/express');
const mongoose = require('mongoose');

const routes = require('./src/api');
const app = express('', routes);

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = process.env.PORT || 3001;

db.once('open', function () {
  app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
  });
});
