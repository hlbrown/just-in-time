const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    medication: {
        type: Schema.Types.ObjectId,
        ref: 'Medication',
        required: true
    }
});

const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);

module.exports = Diagnosis;
