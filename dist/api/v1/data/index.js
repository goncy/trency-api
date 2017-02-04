'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _branch = require('./branch/');

var _branch2 = _interopRequireDefault(_branch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// ROUTES
router.use('/:branch', _branch2.default);

exports.default = router;