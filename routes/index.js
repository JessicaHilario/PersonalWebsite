var express = require('express');
var router = express.Router();
var title = "Jessica Hilario";
/* GET home page. */

router.get('/', function(req, res, next) {
    var query = require('url').parse(req.url, true).query;
    var buffer ="";
    res.render('index', { title:title, data:buffer});

});


module.exports = router;
