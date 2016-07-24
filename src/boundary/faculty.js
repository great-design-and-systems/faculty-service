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
            name: {
                first: param.firstName,
                middle: param.middleName,
                last: param.lastName
            },
            dateOfBirth: param.dateOfBirth,
            gender: param.gender,
            address: param.address,
            barcode: param.barcode,
            contactNo: param.contactNo,
            contactPerson: {
                name: param.contactName,
                email: param.contactEmail,
                phoneNo: param.contactPersonNo
            },
            department: param.department
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