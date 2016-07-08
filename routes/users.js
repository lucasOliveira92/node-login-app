var express = require('express');
var router = express.Router();

// Register User
router.get('/register', function(req, res){
	res.render('register');
});

// Login User
router.get('/login', function(req, res){
	res.render('login');
});

module.exports = router;
