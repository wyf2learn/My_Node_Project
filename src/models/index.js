var mongoose = require('mongoose');
var config = require('../../config');

mongoose.connect(config.connectionStr, {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        console.log('connect to %s error: ', config.connectionStr, err.message);
        process.exit(1);
    }
});

// models
require('./surpriseBall');

exports.SurpriseBall = mongoose.model('SurpriseBall');