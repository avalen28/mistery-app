const mongoose = require("mongoose");
const { Schema } = mongoose;

const petSchema = new Schema(
    {
        name: String, 
        gender: String, 
        age: Number, 
        type: String,
        image: String,
        needsMedicine: Boolean, 
        description: String,
        owner: {type: Schema.Types.ObjectId, ref: 'User'}
      },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
