const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Winnipeg team' });
});

/* GET Sign Up */
router.get('/signup', function (req, res, next) {
  res.render('auth/signup');
});

/* GET Login */

router.get('/login', function (req, res, next) {
  res.render('auth/login');
});

module.exports = router;