'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./index/');

var _index2 = _interopRequireDefault(_index);

var _line = require('./line/');

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// ROUTES
router.use('/:line', _line2.default);

// ENDPOINTS
router.use('/', _index2.default);

exports.default = router;