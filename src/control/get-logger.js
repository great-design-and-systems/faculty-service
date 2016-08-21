'use strict';
var log4js = require('log4js');
var APP_NAME = process.env.APP_NAME || 'faculty_service';

module.exports = function(callback) {
    callback(undefined, log4js.getLogger(APP_NAME));
};