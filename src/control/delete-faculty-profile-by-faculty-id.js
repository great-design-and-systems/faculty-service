'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(facultyId, callback) {
    FacultyProfile.findByIdAndRemove(facultyId, function(err, result) {
        if (err) {
            logger.error('deleteFaculty', err);
            callback({
                message: 'Failed removing facultyId ID' + facultyId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;