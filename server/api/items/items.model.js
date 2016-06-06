'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemsSchema = new Schema({
  classcode: String,
  isbn: Number,
  type: {
    type: String, default: "Textbook",
    enum: ['Textbook', 'Workbook', 'Solution Manual', 'Lab Manual', 'Lab Workbook', 'Study Guide']
  },
  status: { type: Boolean, },
  price: { type: Number, min: 0, max: 1000 },
  negotiable: {
    type: String, default: 'u', // 'u' is undecided
    enum: ['y','n','u'],
  },
  timeposted: { type: Date, default: Date.now },
  sellerid: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Items', ItemsSchema);
