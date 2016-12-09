var proxy = require('../proxy');
var spb = proxy.SurpriseBall;

// exports.homepage = function (request, response) {
//     proxy.save(function(err, data) {
//         console.log(err);
//         console.log(data);
//         data = data || [];
//         response.render('index', { list: data });
//     });
// }

exports.homepage = function (request, response) {
    proxy.save(function() {
        spb.getListByYear('2014', function (err, data) {
            console.log(data.length);
            data = data || [];
            response.render('index', { list: data });
        });
    });    
}