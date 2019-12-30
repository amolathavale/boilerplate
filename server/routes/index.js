var express = require('express');
var router = express.Router();
import path from 'path'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../index.html'));
});

module.exports = router;