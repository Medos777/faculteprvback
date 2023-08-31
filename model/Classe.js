const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Emploi = require('./Emploi')

const AutoIncrement = require('mongoose-sequence')(mongoose);
const Etudiant = require('./etudiant');
const ClassSchema = new Schema({
    name: { type: String, required: true },
    etudiants: [{ type: Schema.Types.ObjectId, ref: 'Etudiant' }],
    emplois: { type: Schema.Types.ObjectId, ref: 'Emploi', required: false },
    lengthEtudiant: { type: Number }
});

ClassSchema.pre('save', function(next) {
    this.lengthEtudiant = this.etudiants.length;
    next();
});
module.exports = mongoose.model('Classe', ClassSchema);
