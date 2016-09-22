'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(facultyId, callback) {
    FacultyProfile.findOne({
    	facultyId: facultyId
    }, function (err, res) {
        if (err) {
            logger.error('validate-faculty-id', err);
            callback(null, true);
        } else {
            if (res) {
                callback({
                    message: 'Faculty ID already exists.'
                });
            } else {
                callback(null, true);
            }
        }
    });
}

module.exports = execute;