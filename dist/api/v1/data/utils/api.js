'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restartServer = exports.apiRequest = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _methods = require('./methods');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiRequest = exports.apiRequest = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(branch, tipo, key) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _requestPromise2.default)({
              url: tipo === 'arribos' ? _constants.API_URLS.arrivals : _constants.API_URLS.positions,
              headers: _constants.API_HEADERS,
              qs: {
                rnd: (0, _methods.randomString)(),
                ramal: branch,
                key: key
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function apiRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var restartServer = exports.restartServer = (0, _requestPromise2.default)({
  url: 'https://api.heroku.com/apps/trenesargentinosapi/dynos',
  method: 'DELETE',
  headers: _constants.RESTART_HEADERS
});