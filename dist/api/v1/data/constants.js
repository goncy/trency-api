'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CACHE_TIME = exports.CACHE_TIME = 15000;
var API_URLS = exports.API_URLS = {
  arrivals: 'https://trenes.sofse.gob.ar/v2_pg/arribos/ajax_arribos.php?',
  positions: 'https://trenes.sofse.gob.ar/v2_pg/mapas/ajax_posiciones.php?'
};
var API_HEADERS = exports.API_HEADERS = {
  'Referer': 'https://trenes.sofse.gob.ar',
  'Host': 'trenes.sofse.gob.ar'
};
var KEYS = exports.KEYS = ['NRVQjcjTUF0I30EVFBDTqdWp%23', 'v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM'];