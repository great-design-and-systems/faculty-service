'use strict';
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var uniqueValidator = require('mongoose-unique-validator');

var facultyProfileSchema = new mongoose.Schema({
    facultyId: {
        type: String,
        required: [true, 'Faculty Id is required.'],
        unique: [true, 'Faculty ID already exists']
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
    createdOn: { type: Date, default: Date.now },
    imageId: String
});

facultyProfileSchema.plugin(mongoosePaginate);
facultyProfileSchema.plugin(uniqueValidator);

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);