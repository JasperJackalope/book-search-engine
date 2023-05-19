const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/book-search-engine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
