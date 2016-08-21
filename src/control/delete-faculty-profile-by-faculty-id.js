'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var GetLogger = require('./get-logger');

function execute(facultyId, callback) {
    var logger;
    new GetLogger(function(err, log) {
        logger = log;
    });
    FacultyProfile.findByIdAndRemove(facultyId, function(err, result) {
        if (err) {
            logger.error(err);
            callback({
                message: 'Failed removing facultyId ID' + facultyId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;