const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Pet = require("../models/Pet");
const petArray = require("./data");

const MONGO_URL = "mongodb+srv://admin:admin@winnipegdb.vlodzpu.mongodb.net/winnipegDB"

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("conected with Mongo"))
  .then(() => Pet.deleteMany())
  .then(() => Pet.create(petArray))
  .then(() => console.log("data created"))
  .catch((err) => console.log(err))
  .finally(() => mongoose.disconnect());