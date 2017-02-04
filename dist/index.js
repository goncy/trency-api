'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _constants = require('./constants');

var _utils = require('./utils');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || _constants.DEFAULT_PORT;

// PLUGINS
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)());
app.use((0, _compression2.default)());

// ROUTES
app.use('/api', _api2.default);

// ENDPOINTS
app.get('*', _utils.notFound);

// SERVER
app.listen(PORT, (0, _utils.portMessage)(PORT));