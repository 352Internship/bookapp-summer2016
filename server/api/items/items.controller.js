'use strict';

var _ = require('lodash');
var Items = require('./items.model');

// Get list of items
exports.index = function(req, res) {
  Items.find(function (err, items) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(items);
  });
};

// Get list of items that are ACTIVE
exports.activeOnly = function(req, res) {
  Items.find({ status: true }).find(function (err, items) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(items);
  });
};

// Get a single items
exports.show = function(req, res) {
  Items.findById(req.params.id, function (err, items) {
    if(err) { return handleError(res, err); }
    if(!items) { return res.status(404).send('Not Found'); }
    return res.json(items);
  });
};

// Creates a new items in the DB.
exports.create = function(req, res) {
  Items.create(req.body, function(err, items) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(items);
  });
};

// Updates an existing items in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Items.findById(req.params.id, function (err, items) {
    if (err) { return handleError(res, err); }
    if(!items) { return res.status(404).send('Not Found'); }
    var updated = _.merge(items, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(items);
    });
  });
};

// Deletes a items from the DB.
exports.destroy = function(req, res) {
  Items.findById(req.params.id, function (err, items) {
    if(err) { return handleError(res, err); }
    if(!items) { return res.status(404).send('Not Found'); }
    items.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
