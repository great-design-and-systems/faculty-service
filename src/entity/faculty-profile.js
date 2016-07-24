'use strict';
var mongoose = require('mongoose');

var facultyProfileSchema = new mongoose.Schema({
    facultyId: {
        type: String,
        required: [true, 'Faculty Id is required.']
    },
    firstName: {
        type: String,
        required: [true, 'firstname is required.']
    },
    middleName: String,
    lastName: {
        type: String,
        required: [true, 'lastname is required.']
    },
    birthDate: Date,
    gender: String,
    address: String,
    contactNo: String,
    emailAddress: String,
    department: String,
    contactName: String,
    contactAddress: String,
    contactEmail: String,
    contactPersonNo: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);