var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('kakaotalk/login');
});

router.get('/main', function (req, res, next) {
    res.render('kakaotalk/main');
});

router.get('/friends', function (req, res, next) {
    res.render('kakaotalk/friends');
});

router.get('/chatting-list', function (req, res, next) {
    res.render('kakaotalk/chatting-list');
});

module.exports = router;