'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(condition, update, callback) {
    FacultyProfile.update(condition, update, { multi: true }, function(err, result) {
        if (err) {
            logger.error('update', err);
            callback({
                message: 'Failed to update ' + condition
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;