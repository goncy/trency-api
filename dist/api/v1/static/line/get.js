'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var get = function get(req, res) {
  var lineData = _constants.LINES_DATA.find(function (line) {
    return line.id === req.params.line;
  });

  return lineData ? res.json({ response: lineData }) : res.status(400).send({ error: 'No se encontraron resultados' });
};

exports.default = get;