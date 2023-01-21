const express = require('express');
const router = express.Router();

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