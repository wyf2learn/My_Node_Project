var express = require('express');
var router = express.Router();
var indexCtrler = require('../controllers/index');

router.use('/static', express.static('public'));

router.get('/', indexCtrler.homepage);

module.exports = router;