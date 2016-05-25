'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemsSchema = new Schema({
  name: String,
  isbn: Number,
  info: String,
  active: Boolean,
  type: {
    type: String, default: "Textbook",
    enum: ['Textbook', 'Workbook', 'Solution Manual', 'Lab Manual', 'Lab Workbook', 'Study Guide']
  }
});

module.exports = mongoose.model('Items', ItemsSchema);
