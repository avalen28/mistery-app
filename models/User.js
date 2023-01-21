const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  hashedPassword: {
    type: String,
    required: [true, 'Please add a password']
  },
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, 'Please add phone number'],
    unique: true,
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  role:{
    type:String,
    enum:{
        values:['walker','owner'],
        message:'That is not a valid role'
    },
    default: 'onwer'
  }
},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);

module.exports = User;