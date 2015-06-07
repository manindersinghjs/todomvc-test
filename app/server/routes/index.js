var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: 'Express'
    });
});

router.get('/getdata/:id', function(req, res, next) {
    console.log('ID:', req.params.id);
    var dataKey = req.params.id;
    var fs = require('fs');
    fs.readFile('result/' + dataKey + '.json', 'utf-8', function(err, data) {
        if (err) console.log(err);
        res.send(data);
    });
});

module.exports = router;