'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var notFound = exports.notFound = function notFound(req, res) {
  return res.status(404).send({ error: 'No se encontro un servicio para esta ruta' });
};

var portMessage = exports.portMessage = function portMessage(port) {
  return function () {
    return console.log('[INFO] Listening on *:' + port);
  };
};