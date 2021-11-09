const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
  },
  prescription: {
    type: Boolean,
    required: true
  },
  OTC: {
    type: Boolean,
    required: true
  }, 
  dose: {
    type: String,
    required: true,
    trim: true
  }, 
  interactions: {
    type: String
  }
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
