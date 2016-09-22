'use strict';
var CreateFacultyProfile = require('../control/create-faculty-profile');
var UpdateFacultyProfile = require('../control/update-faculty-profile');
var GetFacultyProfileByFacultyId = require('../control/get-faculty-profile-by-faculty-id');
var DeleteFacultyProfileByFacultyId = require('../control/delete-faculty-profile-by-faculty-id');
var GetFaculties = require('../control/get-faculties');
var ValidateFacultyId = require('../control/validate-faculty-id');

module.exports = {
    getProfileByFacultyId: function (facultyId, callback) {
        new GetFacultyProfileByFacultyId(facultyId, function (err, result) {
            if (err) {
                callback(err);
            } else {
                if (!result) {
                    callback("No Result");
                } else {
                    callback(undefined, result);
                }

            }
        });
    },
    create: function (param, callback) {
        new CreateFacultyProfile({
            facultyId: param.facultyId,
            firstName: param.firstName,
            middleName: param.middleName,
            lastName: param.lastName,
            gender: param.gender,
            contactNo: param.contactNo,
            emailAddress: param.emailAddress,
            department: param.department,
            imageId: param.imageId
        }, callback);
    },
    update: function (facultyId, param, callback) {
        new UpdateFacultyProfile(facultyId, param, callback);
    },
    removeFaculty: function (facultyId, callback) {
        new DeleteFacultyProfileByFacultyId(facultyId, function (err) {
            if (!err) {
                callback(undefined, {
                    message: 'Faculty has been removed.'
                });
            } else {
                callback(err);
            }
        });
    },
    getFaculties: function (queryParam, callback) {
    	console.log(queryParam);
        new GetFaculties(queryParam, callback);
    },
    validateFacultyId: function (facultyId, callback) {
        new ValidateFacultyId(facultyId, callback);
    }
};