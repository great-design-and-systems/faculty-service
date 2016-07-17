var FacultyProfile = require('../entity/faculty-profile');

function execute(facultyId, callback) {
    FacultyProfile.remove({
        facultyId: facultyId
    }, callback);
}

module.exports = execute;