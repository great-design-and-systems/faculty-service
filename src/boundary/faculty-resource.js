'use strict';

var Faculty = require('./faculty');
var NotFoundException = require('../control/not-found-exception');
var getCreateResponse = require('../control/get-create-response');
var API = process.env.API_NAME || '/api/faculty/';

module.exports = function (app) {
    app.get(API + 'faculty-profile/:facultyId', function (req, res) {
        Faculty.getProfileByFacultyId(req.params.facultyId, function (err, result) {
            if (err) {
                res.status(404).send(new NotFoundException('Faculty profile'));
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.post(API + 'create', function (req, res) {
        Faculty.create(req.body, function (err, result) {
            new getCreateResponse(req, res, err, result);
        });
    });

    app.put(API + 'update', function (req, res) {
        Faculty.update(req.body, function (err, numberAffected, response) {
            if (err) {
                res.status(500).send(response);
            } else {
                console.log(numberAffected);
                res.status(200).send(numberAffected);
            }
        });
    });


    app.delete(API + ':facultyId', function (req, res) {
        Faculty.removeFaculty(req.params.facultyId, function (err, result) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove faculty id ' + req.params.facultyId + '.'
                });
            } else {
                res.status(200).send(result);
            }
        });
    });
};