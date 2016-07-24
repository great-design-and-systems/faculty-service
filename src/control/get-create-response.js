'use strict';

var API = process.env.API_NAME || '/api/faculty/';

function execute(req, res, err, result) {
    if (err) {
        res.status(500).send({
            message: 'Faculty creation failed.',
            error: err
        });
    } else {
        res.status(200).send({
            message: 'Faculty creation completed.',
            links: {
                profile: 'http://' + req.headers.host + API + 'faculty-profile/' + result.facultyId
            }
        });
    }
}

module.exports = execute;