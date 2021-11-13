const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
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
  // phoneNumber: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   maxlength: 10
  // },
  // dob: {
  //   type: Date,
  //   required: true,
  //   trim: true
  // },
  // userPhoto: {
  //   type: String,
  //   required: false,
  // },
  // // Adding two different portals for future development
  // admin: {
  //   type: Boolean,
  //   required: false,
  // },
  // careGiver: {
  //   type: Boolean,
  //   required: false,
  // },
  profile: [{
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  }]
});

// set up pre-save middleware to create password
userSchema.pre('validate', async function(next) {
  console.log(this.isNew, this.isModified('password'));
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
