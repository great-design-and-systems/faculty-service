'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(facultyProfile, callback) {
    FacultyProfile.create(facultyProfile, function(err, result) {
        if (err) {
            logger.error('create', err);
            callback({
                message: 'Failed to create faculty profile.'
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;