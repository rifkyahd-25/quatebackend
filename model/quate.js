const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String,
  category: String,
});

module.exports = mongoose.model('quote', quoteSchema);
