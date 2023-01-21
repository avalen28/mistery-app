const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 6;
const User = require("../models/User");

/* GET logout */
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.clearCookie("basic-auth");
      //   res.redirect('/');
    }
  });
});

// POST Sign up
router.post("/signup", async function (req, res, next) {
  const {
    firstname,
    lastname,
    email,
    password,
    username,
    phone,
    city,
    country,
    role,
  } = req.body;
  if (!username || !email || !password) {
    res.render("auth/signup", { error: "All fields are necessary." });
    return;
  }
  try {
    const userInDB = await User.findOne({ email: email });
    if (userInDB) {
      res.render("auth/signup", {
        error: `There already is a user with email ${email}`,
      });
      return;
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      // const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({ username, email, hashedPassword, role });
      res.render("auth/profile", user);
    }
  } catch (error) {
    next(error);
  }
});
/* GET Sign Up */
router.get("/signup", function (req, res, next) {
  res.render("auth/signup");
});

/* POST log in view. */
router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.render("auth/login", {
      error: "Introduce email and password to log in",
    });
    return;
  }
  try {
    const userInDB = await User.findOne({ email: email });
    if (!userInDB) {
      res.render("auth/login", { error: `There are no users by ${email}` });
      return;
    } else {
      const passwordMatch = await bcrypt.compare(
        password,
        userInDB.hashedPassword
      );
      if (passwordMatch) {
        req.session.currentUser = userInDB;
        //res.render('auth/profile', userInDB);
      } else {
        res.render("auth/login", { error: "Unable to authenticate user" });
        return;
      }
    }
  } catch (error) {
    next(error);
  }
});

/* GET Login */
router.get("/login", function (req, res, next) {
  res.render("auth/login");
});

module.exports = router;
