'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _constants = require('../constants');

var _api = require('../utils/api');

var _keys = require('../utils/keys');

var _error = require('../utils/error');

var _cache = require('../utils/cache');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var positionsKey = _constants.KEYS[0];
var arrivalsKey = _constants.KEYS[1];

var get = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var cachedArrivals, cachedPositions, _ref2, _ref3, arrivals, positions;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if this request is cached
            cachedArrivals = (0, _cache.getCache)('arrivals_' + req.params.branch);
            cachedPositions = (0, _cache.getCache)('positions_' + req.params.branch);

            if (!(cachedArrivals && cachedPositions)) {
              _context.next = 6;
              break;
            }

            res.json({ response: {
                arrivals: JSON.parse(cachedArrivals),
                positions: JSON.parse(cachedPositions) }
            });
            _context.next = 27;
            break;

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return (0, _api.apiRequest)(req.params.branch, 'arribos', arrivalsKey);

          case 9:
            _context.t0 = _context.sent;
            _context.next = 12;
            return (0, _api.apiRequest)(req.params.branch, 'posiciones', positionsKey);

          case 12:
            _context.t1 = _context.sent;
            _context.next = 15;
            return [_context.t0, _context.t1];

          case 15:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            arrivals = _ref3[0];
            positions = _ref3[1];


            // Swap key on arrivals error and cache response on success
            arrivals === 'incorrect key' ? arrivalsKey = (0, _keys.swapKey)(arrivalsKey) : (0, _cache.setCache)('arrivals_' + req.params.branch, arrivals);
            // Swap key on positions error and cache response on success
            positions === 'incorrect key' ? positionsKey = (0, _keys.swapKey)(positionsKey) : (0, _cache.setCache)('positions_' + req.params.branch, positions);

            // Return response
            res.json({
              response: {
                arrivals: JSON.parse(arrivals),
                positions: JSON.parse(positions)
              }
            });
            _context.next = 27;
            break;

          case 24:
            _context.prev = 24;
            _context.t2 = _context['catch'](6);

            // If the ip is banned, restart the server
            // if (bannedError(error)) restartServer()
            // Return error
            res.status(500).send({
              error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde',
              detail: _context.t2
            });

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[6, 24]]);
  }));

  return function get(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = get;