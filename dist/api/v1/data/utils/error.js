'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bannedError = exports.bannedError = function bannedError(err) {
  return err && err.error && err.error.code && err.error.code === 'ECONNREFUSED';
};