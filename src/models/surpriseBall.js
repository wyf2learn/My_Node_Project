var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var SurpriseBall = new Schema({
    index: { type: String },
    create_at: { type: String },
    reds: { type: Array },
    blue: { type: String }
});

// 2014152    08,13,15,20,21,25|12    2014-12-30
SurpriseBall.methods.format = function (str) {
    var arr = str.trim().split(/\s+/);
    if (arr.length !== 3) {
        console.log(str);
        console.log(arr);
        throw new Error("We can't format this string : " + str);
    } else {
        this.index = arr[0];
        var res = arr[1].split('|');
        this.reds = res[0].split(',');
        this.blue = res[1];
        this.create_at = arr[2];
    }
}

mongoose.model('SurpriseBall', SurpriseBall);