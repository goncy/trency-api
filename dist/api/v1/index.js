'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _static = require('./static');

var _static2 = _interopRequireDefault(_static);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

// ENDPOINTS
routes.use('/static', _static2.default);
routes.use('/data', _data2.default);

exports.default = routes;