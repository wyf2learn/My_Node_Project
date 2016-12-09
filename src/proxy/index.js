var common = require('../common/save');
var SurpriseBall = require('./surpriseBall');


exports.SurpriseBall = SurpriseBall;

exports.save = function (callback) {
    common.globalSave(function(list) {
        SurpriseBall.insertList(list, function() {
            callback();
        });
    });
}