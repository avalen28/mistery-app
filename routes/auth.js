const express = require('express');
const router = express.Router();
const bcrypt = require ("bcryptjs")
const saltRounds = 6;

const User = require("../models/User")

/* GET logout */
router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
          next(err);
        } else {
          res.clearCookie('basic-auth');
        //   res.redirect('/');
        }
      });
});

module.exports = router;

// POST Sign up 

router.post('/signup', async function (req, res, next) {
  const { firstname, lastname, email, hashedPassword, username, phone, city, country, role,   } = req.body;
  if (!username || !email || !password) {
    res.render('auth/signup', { error: 'All fields are necessary.' });
    return;
  
  }
  try {
    const userInDB = await User.findOne({ email: email });
    if (userInDB) {
      res.render('auth/signup', { error: `There already is a user with email ${email}` });
      return;
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      // const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({ username, email, hashedPassword,role });
      res.render('auth/profile', user);
    }
  } catch (error) {
    next(error)
  }
});