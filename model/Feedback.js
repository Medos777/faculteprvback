const mongoose = require('mongoose');
const etudiant = require('./etudiant');
const classe = require('./Classe');
const matiere = require('./Matiere');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    etudiant: { type: Schema.Types.ObjectId, ref: 'Etudiant', required: true },
    feedbackText: { type: String, required: true },
    feedbackDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);