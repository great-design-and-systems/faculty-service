var FacultyProfile = require('../entity/faculty-profile');

function execute(facultyProfile, callback) {
    FacultyProfile.create(facultyProfile, callback);
}

module.exports = execute;