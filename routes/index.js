var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('html/index', { title: '<h1>Express</h1>'
  ,users:[{username: 'hxk'}]
  });
});

module.exports = router;
