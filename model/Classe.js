const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Emploi = require('./Emploi')

const AutoIncrement = require('mongoose-sequence')(mongoose);

const Etudiant= require('./etudiant')
const ClassSchema = new Schema({
    name: { type: String, required: true },
    etudiants: [{ type: Schema.Types.ObjectId, ref: 'Etudiant' }],
   // matieres: [{type: Schema.Types.ObjectId, ref: 'Matiere'}],
    emplois: { type: Schema.Types.ObjectId, ref: 'Emploi',required:true },
});
module.exports = mongoose.model('Classe', ClassSchema);
