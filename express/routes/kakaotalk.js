var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('kakaotalk/login');
});

router.get('/friends', function (req, res, next) {
    res.render('kakaotalk/friends');
});

module.exports = router;