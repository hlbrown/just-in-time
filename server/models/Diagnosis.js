const mongoose = require('mongoose');

const { Schema } = mongoose;
const Medication = require('./Medication');
const Profile = require('./Profile');

const diagnosisSchema = new Schema({
    // name of the diagnosis or specific illness
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    symptoms: {
        type: String,
        required: true,
        trim: true
    },
    profile: [Profile.schema],
    medication: [Medication.schema]
});

const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);

module.exports = Diagnosis;
