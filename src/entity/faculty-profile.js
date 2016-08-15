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
    gender: String,
    contactNo: String,
    emailAddress: String,
    department: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);