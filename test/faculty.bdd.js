(function () {
    'use strict';
    var Faculty = require('../src/boundary/faculty');
    var Database = require('./config/database');
    var sinon = require('sinon');
    var chai = require('chai');
    var expect = chai.expect;
    describe('Faculty Service BDD', function () {
        var db = new Database();

        beforeEach(function (done) {
            return db.connect(done);
        });

        describe('GIVEN: I have faculty data', function () {
            var facultyId = '123456';
            var firstName = 'Analyn';
            var middleName = 'Rosales';
            var lastName = 'Flores';
            var birthDate = '1990-01-01';
            var gender = 'female';
            var address = 'Ortigas Center, Pasig City';
            var contactNo = '09171234567';
            var emailAddress = 'analynflores@gmail.com';
            var department = 'College of Science';
            var contactName = 'Jerico';
            var contactAddress = 'Quezon City';
            var contactEmail = 'jerico@gmail.com';
            var contactPersonNo = '09174351234';
            var data = {};

            beforeEach(function () {
                data.facultyId = facultyId;
                data.firstName = firstName;
                data.middleName = middleName;
                data.lastName = lastName;
                data.birthDate = birthDate;
                data.gender = gender;
                data.address = address;
                data.contactNo = contactNo;
                data.emailAddress = emailAddress;
                data.department = department;
                data.contactName = contactName;
                data.contactAddress = contactAddress;
                data.contactEmail = contactEmail;
                data.contactPersonNo = contactPersonNo;
            });

            describe('WHEN: saving faculty', function () {
                var savedResult;
                beforeEach(function (done) {
                    Faculty.create(data, function (err, result) {
                        savedResult = result;
                        done();
                    });
                });

                it('THEN: response is faculty profile', function () {
                    expect(!!savedResult).to.equal(true);
                });
                describe('WHEN: updating faculty profile', function() {
                
                    var expectedResult;
                    beforeEach(function (done) {
                        data.address = 'Dasmarinas, Cavite';
                        Faculty.update(data, function (err, result) {
                            expectedResult = result;
                            done();
                        });
                    });

                    it('THEN: faculty profile is updated', function () {
                        expect(expectedResult.nModified).to.be.above(0);
                    });      
                });
                describe('GIVEN: I have facultyId', function () {
                    describe('WHEN: getting facultyProfile', function() {
                        var facultyProfile;
                        beforeEach(function (done) {
                            Faculty.getProfileByFacultyId(facultyId, function(err, result) {
                                facultyProfile = result;
                                done();
                            });
                        });
                        it('THEN: faculty profile is retrieved', function () {
                            expect(!!facultyProfile).to.equal(true);
                        });
                    });
                    describe('WHEN: removing faculty', function() {
                        var message;
                        beforeEach(function (done) {
                            Faculty.removeFaculty(facultyId, function (err, result) {
                                message = result.message;
                                done();
                            });
                        });

                        it('THEN: faculty profile is removed', function () {
                            expect(!!message).to.equal(true);
                            expect(message).to.equal('Faculty has been removed.');
                        });
                    });
                });
            });

        });

        afterEach(function (done) {
            return db.disconnect(done);
        });
    });
})();