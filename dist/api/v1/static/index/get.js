'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var get = function get(req, res) {
  return res.json({ response: _constants.LINES_DATA });
};

exports.default = get;