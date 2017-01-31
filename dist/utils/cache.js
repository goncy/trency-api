'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCache = exports.setCache = undefined;

var _memoryCache = require('memory-cache');

var _memoryCache2 = _interopRequireDefault(_memoryCache);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCache = exports.setCache = function setCache(key, value) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.CACHE_TIME;
  return !_memoryCache2.default.get(key) && _memoryCache2.default.put(key, value, time);
};
var getCache = exports.getCache = function getCache(key) {
  return _memoryCache2.default.get(key);
};