const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Pet = require("../models/Pet");


/* get pets */
router.get('/pets', (req, res, next) => {
    res.render('/pets');
});
/* GET pets:id */
router.get('/pets/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id).populate('owner');
        res.render('pets/petsDetail', pet);
    } catch(err) {
        // console.log(err);
    }
});

module.exports = router;