'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewpollSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Newpoll', NewpollSchema);