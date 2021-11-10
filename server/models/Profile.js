const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
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
    // address: {
    //   type: String,
    //   required: true,
    //   trim: true
    // }, 
    // image: {
    //   type: String,
    //   required: true
    // }, 
    // dob: {
    //   type: Date,
    //   required: true
    // }, 
    // height: {
    //   type: Number,
    //   required: true
    // }, 
    // weight: { 
    //   type: Number,
    //   required: true
    // }, 
    // bloodType: {
    //   type: String,
    //   required: true
    // },
    // organDonor: {
    //   type: Boolean
    // },
    // pastSurgeries: {
    //   type: Boolean,
    //   required: true
    // },
    // pcpName: {
    //   type: String,
    //   required: true
    // },
    // pcpAddress: {
    //   type: String,
    //   required: true
    // },
    // pcpPhoneNumber:  {
    //   type: Number,
    //   required: true
    // },
    // emergencyContactName: {
    //   type: String,
    //   required: true
    // }, 
    // emergencyContactNumber: {
    //   type: Number,
    //   required: true
    // },
    // Diagnosis: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Diagnosis',
    //   required: true
    // },
    // Medication: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Medication',
    //   required: true
    // },
    // User: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
