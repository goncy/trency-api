'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEYS = exports.API_HEADERS = exports.API_URLS = exports.CACHE_TIME = undefined;

var _randomUseragent = require('random-useragent');

var _randomUseragent2 = _interopRequireDefault(_randomUseragent);

var _methods = require('./utils/methods');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CACHE_TIME = exports.CACHE_TIME = 30000;

var REFERER = 'trenesendirecto.sofse.gob.ar';

var API_URLS = exports.API_URLS = {
  arrivals: 'https://' + REFERER + '/arribos/ajax_arribos.php?',
  positions: 'https://' + REFERER + '/mapas/ajax_posiciones.php?'
};

var API_HEADERS = exports.API_HEADERS = {
  'Referer': 'https://' + REFERER,
  'Host': '' + REFERER,
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*',
  'Accept-Language': 'es-ES,es;q=0.8,en;q=0.6,fr;q=0.4',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': _randomUseragent2.default.getRandom(),
  'X-Forwarded-For': (0, _methods.randomIp)(),
  'Referrer-Policy': 'no-referrer-when-downgrade'
};

var KEYS = exports.KEYS = ['NRVQjcjTUF0I30EVFBDTqdWp%23', 'v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM'];