const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Profile = require('profile');

const userSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   minlength: 1,
  //   maxlength: 100,
  //   unique: true,
  //   trim: true
  // },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10
  },
  dob: {
    type: Date,
    required: true,
    trim: true
  },
  userPhoto: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  careGiver: {
    type: Boolean,
    required: true,
  },
  profile: [Profile.schema]

});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
