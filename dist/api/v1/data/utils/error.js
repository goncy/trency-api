'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBannedError = exports.isBannedError = function isBannedError(err) {
  return err && err.error && err.error.code && err.error.code === 'ECONNREFUSED';
};