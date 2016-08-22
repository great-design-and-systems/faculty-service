'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(facultyId, callback) {
    FacultyProfile.findOne({
        facultyId: facultyId
    }, function(err, result) {
        if (err) {
            logger.error('getProfileByFacultyId', err);
            callback({
                message: 'Failed to get faculty id: ' + facultyId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;