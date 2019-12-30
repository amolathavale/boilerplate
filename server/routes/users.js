var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ users: [{id: 1, uname: 'Amol Athavale', email: 'aa@bb.cc'}, {id: 2, uname: 'Raj Athavale', email: 'ww@uu.hh'}]});
});

module.exports = router;