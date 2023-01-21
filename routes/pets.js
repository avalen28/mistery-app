const Pet = require('../models/Pet');

/* GET edit pet form view */
router.get('/:id/edit', async function (req, res, next) {
    const { id } = req.params;
    try {
      const pet = await Pet.findById(id);
      res.render('petsEdit', pet);
    } catch (error) {
      next(error)
    }
  });
  
  /* POST edit pet */
  router.post('/:id/edit', async function (req, res, next) {
    const { name, gender, age, type, image, needsMedicine, description, owner } = req.body;
    const { id } = req.params;
    try {
      const editedPet = await Pet.findByIdAndUpdate(id, { name, gender, age, type, image, needsMedicine, description, owner });
      res.redirect(`/pets/${editedPet._id}`);
    } catch (error) {
      next(error)
    }
  });