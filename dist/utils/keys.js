'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapKey = undefined;

var _constants = require('../constants');

var swapKey = exports.swapKey = function swapKey(key) {
  return key === _constants.KEYS[0] ? _constants.KEYS[1] : _constants.KEYS[0];
};