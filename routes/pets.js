
/* ROUTE /shows/new */
router.get('/new', function (req, res, next) {
    res.render('newPet');
  });
  /* POST get users show inputs */
  /* ROUTE /shows/new */
  router.post('/new', async function (req, res, next) {
    const { name, gender, age, type, image, needsMedicine, description, owner } = req.body;
    try {
      const createdPet = await Pet.create({ name, gender, age, type, image, needsMedicine, description, owner });
      res.redirect(`/pets/${createdPet._id}`);
    } catch (error) {
      next(error)
    }
  });