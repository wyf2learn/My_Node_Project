var express = require('express');
var app = express();
var router = require('./src/router/router');

var config = require('./config');

app.use('/', router);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.set('views', config.src + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});