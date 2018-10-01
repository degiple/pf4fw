var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'index'});
});

/* from Respons */
router.post('/', function(req, res, next) {
  
});

module.exports = router;
