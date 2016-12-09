var rf = require('fs');
var config = require('../../../config');

module.exports = {
    globalSave: function(callback) {
        var files = ['2014', '2015'];
        var list = [], count = 0;
        for (var i = 0; i < files.length; i++) {
            rf.readFile(config.src + "/common/save/files/" + files[i] + ".txt", 'utf-8', function(err, data) {
                if (err) {
                    console.log("We can't find the file, cause:");
                    console.log(err);
                } else {
                    var cur = data.split('\n');
                    for(var j = 0; j < cur.length; j++) {
                        if(cur[j].length > 0) {
                            list.push(cur[j]);
                        }
                    }
                }
                count += 1;
                if (count === files.length) {
                    callback(list);
                }
            });
        }
    }
}

