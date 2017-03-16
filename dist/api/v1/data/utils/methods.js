"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomString = exports.randomString = function randomString() {
  return Math.random().toString(36).substring(5, 21);
};