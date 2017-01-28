"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomString = function randomString() {
  return Math.random().toString(36).substring(5, 15);
};

exports.default = randomString;