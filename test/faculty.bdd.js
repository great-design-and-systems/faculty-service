(function() {
    'use strict';
    var Faculty = require('../src/boundary/faculty');
    var Database = require('./config/database');
    var sinon = require('sinon');
    var chai = require('chai');
    var expect = chai.expect;
    describe('Faculty Service BDD', function() {
        var db = new Database();

        beforeEach(function(done) {
            return db.connect(done);
        });

        describe('GIVEN: I have faculty data', function() {
            var facultyId = '123456';
            var firstName = 'Analyn';
            var middleName = 'Rosales';
            var lastName = 'Flores';
            var gender = 'female';
            var contactNo = '09171234567';
            var emailAddress = 'analynflores@gmail.com';
            var department = 'College of Science';
            var data = {};

            beforeEach(function() {
                data.facultyId = facultyId;
                data.firstName = firstName;
                data.middleName = middleName;
                data.lastName = lastName;
                data.gender = gender;
                data.contactNo = contactNo;
                data.emailAddress = emailAddress;
                data.department = department;
            });
            describe('WHEN: validating non existing facultyId', function () {
                var result = false;
                beforeEach(function (done) {
                    Faculty.validateFacultyId(data.facultyId, function (err, valid) {
                        result = valid;
                        done();
                    })
                });

                it('THEN: faculty id is valid', function () {
                    expect(result).to.be.true;
                });
            });
            describe('WHEN: saving faculty', function() {
                var savedResult;
                beforeEach(function(done) {
                    Faculty.create(data, function(err, result) {
                        savedResult = result;
                        done();
                    });
                });

                it('THEN: response is faculty profile', function() {
                    expect(!!savedResult).to.equal(true);
                });
                describe('WHEN: validating existing facultyId', function () {
                    var result = false;
                    beforeEach(function (done) {
                    	Faculty.validateFacultyId(data.facultyId, function (err, valid) {
                            result = valid;
                            done();
                        })
                    });

                    it('THEN: faculty id is invalid', function () {
                        expect(result).to.be.undefined;
                    });
                });
                describe('WHEN: updating faculty profile', function() {

                    var expectedResult;
                    beforeEach(function(done) {
                        data.contactNo = '1234567890';
                        Faculty.update(savedResult._id, data, function(err, result) {
                            expectedResult = result;
                            done();
                        });
                    });

                    it('THEN: faculty profile is updated', function() {
                        expect(expectedResult.nModified).to.be.above(0);
                    });
                });
                describe('GIVEN: I have facultyId', function() {
                    var facultyProfile;
                    describe('WHEN: getting facultyProfile', function() {
                        beforeEach(function(done) {
                            Faculty.getProfileByFacultyId(facultyId, function(err, result) {
                                facultyProfile = result;
                                done();
                            });
                        });
                        it('THEN: faculty profile is retrieved', function() {
                            expect(!!facultyProfile).to.equal(true);
                        });
                    });
                    describe('WHEN: removing faculty', function() {
                        var message;
                        beforeEach(function(done) {
                            Faculty.removeFaculty(facultyProfile._id, function(err, result) {
                                message = result.message;
                                done();
                            });
                        });

                        it('THEN: faculty profile is removed', function() {
                            expect(!!message).to.equal(true);
                            expect(message).to.equal('Faculty has been removed.');
                        });
                    });
                });
            });

        });

        afterEach(function(done) {
            return db.disconnect(done);
        });
    });
})();
