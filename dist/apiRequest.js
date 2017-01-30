'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _randomString = require('./randomString');

var _randomString2 = _interopRequireDefault(_randomString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiRequest = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(branch, tipo) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _requestPromise2.default)({
              url: 'https://trenes.sofse.gob.ar/v2_pg/' + (tipo === 'arribos' ? 'arribos' : 'mapas') + '/ajax_' + (tipo === 'arribos' ? 'arribos' : 'posiciones') + '.php?',
              headers: {
                'Referer': 'http://trenes.mininterior.gov.ar/v2_pg/',
                'Host': 'trenes.sofse.gob.ar'
              },
              qs: {
                rnd: (0, _randomString2.default)(),
                key: 'NRVQjcjTUF0I30EVFBDTqdWp%23',
                ramal: branch
              }
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function apiRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = apiRequest;