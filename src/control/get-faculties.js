'use strict';
var FacultyProfile = require('../entity/faculty-profile');

function execute(param, callback) {
	FacultyProfile.paginate({}, {
		page : parseInt(param.page),
		limit : parseInt(param.limit),
		sort : param.sort
	}, callback);
}

module.exports = execute;