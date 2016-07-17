var FacultyProfile = require('../entity/faculty-profile');

function execute(facultyId, callback) {
    FacultyProfile.findOne({
        facultyId: facultyId
    }, callback);
}

module.exports = execute;