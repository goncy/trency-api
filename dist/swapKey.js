'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var swapKey = function swapKey(key) {
  return key === _constants.KEYS[0] ? _constants.KEYS[1] : _constants.KEYS[0];
};

exports.default = swapKey;