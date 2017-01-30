'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _apiRequest = require('./apiRequest');

var _apiRequest2 = _interopRequireDefault(_apiRequest);

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8080;

app.use((0, _cors2.default)());

var positionsKey = _keys.KEYS[0];
var arrivalsKey = _keys.KEYS[1];

app.get('/:branch', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var _ref2, _ref3, arrivals, positions;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _apiRequest2.default)(req.params.branch, 'arribos', arrivalsKey);

          case 3:
            _context.t0 = _context.sent;
            _context.next = 6;
            return (0, _apiRequest2.default)(req.params.branch, 'posiciones', positionsKey);

          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return [_context.t0, _context.t1];

          case 9:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            arrivals = _ref3[0];
            positions = _ref3[1];

            // Swap key on error
            if (arrivals === 'incorrect key') arrivalsKey = (0, _keys.swapKey)(arrivalsKey);
            if (positions === 'incorrect key') positionsKey = (0, _keys.swapKey)(positionsKey);
            // Return response
            res.json({ response: { arrivals: JSON.parse(arrivals), positions: JSON.parse(positions) } });
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t2 = _context['catch'](0);

            // Return error
            res.status(500).send({ error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: _context.t2 });

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(PORT, function () {
  return console.log('[INFO] Listening on *:' + PORT);
});