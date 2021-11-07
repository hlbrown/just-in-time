const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  // purchaseDate: {
  //   type: Date,
  //   default: Date.now
  // },
  // products: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Product'
  //   }
  // ]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
