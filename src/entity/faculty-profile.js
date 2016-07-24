'use strict';
var mongoose = require('mongoose');

var contactPersonSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String
});
var facultyProfileSchema = new mongoose.Schema({
    facultyId: {
        type: String,
        required: [true, 'Faculty Id is required.']
    },
    name: {
        first: String,
        middle: String,
        last: String
    },
    dateOfBirth: Date,
    gender: String,
    address: String,
    barcode: String,
    contactNo: String,
    contactPerson: [contactPersonSchema],
    department: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);