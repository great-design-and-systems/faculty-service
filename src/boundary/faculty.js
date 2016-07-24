'use strict';
var CreateFacultyProfile = require('../control/create-faculty-profile');
var UpdateFacultyProfile = require('../control/update-faculty-profile');
var GetFacultyProfileByFacultyId = require('../control/get-faculty-profile-by-faculty-id');
var DeleteFacultyProfileByFacultyId = require('../control/delete-faculty-profile-by-faculty-id');

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
            birthDate: param.birthDate,
            gender: param.gender,
            address: param.address,
            contactNo: param.contactNo,
            emailAddress: param.emailAddress,
            department: param.department,
            contactName: param.contactName,
            contactAddress: param.contactAddress,
            contactEmail: param.contactEmail,
            contactPersonNo: param.contactPersonNo
        }, callback);
    },
    update: function (param, callback) {
        new UpdateFacultyProfile(param.facultyId, param, callback);
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
    }
};