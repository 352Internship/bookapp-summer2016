'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  sellerid: { type: Schema.Types.ObjectId, ref: 'User' },
  buyerid: { type: Schema.Types.ObjectId, ref: 'User' },
  itemid: { type: Schema.Types.ObjectId, ref: 'Items' },
  timestamp: { type: Date, default: Date.now },
  status: {
    type: String, default: "Offer",
    enum: ["Accepted", "Rejected", "Offer", "Completed"]
  },
  messages: [{
    body: String,
    seller: Boolean,
    timestamp: { type: Date, default: Date.now },
    messageid: Schema.Types.ObjectId
  }]
});

module.exports = mongoose.model('Transaction', TransactionSchema);
