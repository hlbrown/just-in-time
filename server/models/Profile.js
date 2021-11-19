const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
    firstName: {
      type: String,
      required: false,
      trim: true
    }, 
    lastName: {
      type: String,
      required: false,
      trim: true
    },
    sex: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      required: false,
      trim: true
    }, 
    image: {
      type: String,
      required: false
    }, 
    age: {
      type: String,
      required: false
    }, 
    height: {
      type: String,
      required: false
    }, 
    weight: { 
      type: Number,
      required: false
    }, 
    bloodType: {
      type: String,
      required: false
    },
    organDonor: {
      type: Boolean
    },
    pastSurgeries: {
      type: Boolean,
      required: false
    },
    pcpName: {
      type: String,
      required: false
    },
    pcpAddress: {
      type: String,
      required: false
    },
    pcpPhoneNumber:  {
      type: String,
      required: false
    },
    emergencyContactName: {
      type: String,
      required: false
    }, 
    emergencyContactNumber: {
      type: String,
      required: false
    },
    diagnosis: [{
      type: Schema.Types.ObjectId,
      ref: 'Diagnosis',
      required: false
    }],
    medication: [{
      type: Schema.Types.ObjectId,
      ref: 'Medication',
      required: false
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
