'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(id, update, callback) {
    FacultyProfile.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update', err);
            callback({
                message: 'Failed to update ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;