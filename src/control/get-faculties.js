'use strict';
var FacultyProfile = require('../entity/faculty-profile');
var logger = require('./get-logger');

function execute(param, callback) {
	FacultyProfile.paginate({}, {
		page : parseInt(param.page),
		limit : parseInt(param.limit),
		sort : param.sort
	}, function(err, result) {
        if (err) {
            logger.error('getFaculties', err);
            callback({
                message: 'Failed to get faculty records.'
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;