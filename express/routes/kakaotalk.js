var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('kakaotalk/login');
});

router.get('/main', function (req, res, next) {
    res.render('kakaotalk/main');
});

module.exports = router;