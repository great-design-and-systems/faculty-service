var FacultyProfile = require('../entity/faculty-profile');

function execute(condition, update, callback) {
    FacultyProfile.update(condition, update, {multi: true}, callback);
}

module.exports = execute;