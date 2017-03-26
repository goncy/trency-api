'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomString = exports.randomString = function randomString() {
  return Math.random().toString(36).substring(5, 21);
};

// IPS
var isPrivate = function isPrivate(ip) {
  return (/^10\.|^192\.168\.|^172\.16\.|^172\.17\.|^172\.18\.|^172\.19\.|^172\.20\.|^172\.21\.|^172\.22\.|^172\.23\.|^172\.24\.|^172\.25\.|^172\.26\.|^172\.27\.|^172\.28\.|^172\.29\.|^172\.30\.|^172\.31\./.test(ip)
  );
};

var randomByte = function randomByte() {
  return Math.round(Math.random() * 256);
};

var randomIp = exports.randomIp = function randomIp() {
  var ip = randomByte() + '.' + randomByte() + '.' + randomByte() + '.' + randomByte();
  if (isPrivate(ip)) return randomIp();
  return ip;
};