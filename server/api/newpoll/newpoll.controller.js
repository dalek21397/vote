'use strict';

var _ = require('lodash');
var Newpoll = require('./newpoll.model');

// Get list of newpolls
exports.index = function(req, res) {
  Newpoll.find(function (err, newpolls) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(newpolls);
  });
};

// Get a single newpoll
exports.show = function(req, res) {
  Newpoll.findById(req.params.id, function (err, newpoll) {
    if(err) { return handleError(res, err); }
    if(!newpoll) { return res.status(404).send('Not Found'); }
    return res.json(newpoll);
  });
};

// Creates a new newpoll in the DB.
exports.create = function(req, res) {
  Newpoll.create(req.body, function(err, newpoll) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(newpoll);
  });
};

// Updates an existing newpoll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Newpoll.findById(req.params.id, function (err, newpoll) {
    if (err) { return handleError(res, err); }
    if(!newpoll) { return res.status(404).send('Not Found'); }
    var updated = _.merge(newpoll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(newpoll);
    });
  });
};

// Deletes a newpoll from the DB.
exports.destroy = function(req, res) {
  Newpoll.findById(req.params.id, function (err, newpoll) {
    if(err) { return handleError(res, err); }
    if(!newpoll) { return res.status(404).send('Not Found'); }
    newpoll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}