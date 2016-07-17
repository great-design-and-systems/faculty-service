var Database = require('./src/config/database');
var Server = require('./src/config/server');
var Resource = require('./src/boundary/faculty-resource');
var express = require('express');
var app = express();

(function() {
    new Database();
    new Server(app);
    new Resource(app);
})();

module.exports = app;