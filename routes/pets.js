const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Pet = require("../models/Pet");

/* ROUTE /shows/new */
router.get("/new", function (req, res, next) {
  res.render("newPet");
});
/* POST get users show inputs */
/* ROUTE /shows/new */
router.post("/new", async function (req, res, next) {
  const { name, gender, age, type, image, needsMedicine, description, owner } =
    req.body;
  try {
    const createdPet = await Pet.create({
      name,
      gender,
      age,
      type,
      image,
      needsMedicine,
      description,
      owner,
    });
    res.redirect(`/pets/${createdPet._id}`);
  } catch (error) {
    next(error);
  }
});

/* get pets */
router.get("/pets", (req, res, next) => {
  res.render("/pets");
});
/* GET pets:id */
router.get("/pets/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id).populate("owner");
    res.render("pets/petsDetail", pet);
  } catch (err) {
    // console.log(err);
  }
});

module.exports = router;
