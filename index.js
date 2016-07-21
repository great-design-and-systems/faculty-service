var Database = require('./src/config/database');
var Server = require('./src/config/server');
var Resource = require('./src/boundary/faculty-resource');
var express = require('express');
var app = express();
var LoggerServer = require('./src/config/logger-server');

(function() {
    new Database();
    new Server(app);
    new Resource(app);
    new LoggerServer(app);
})();

module.exports = app;