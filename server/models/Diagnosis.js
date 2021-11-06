const mongoose = require('mongoose');

const { Schema } = mongoose;

const diagnosisSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   }
});

const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);

module.exports = Diagnosis;
