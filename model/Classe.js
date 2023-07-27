const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Etudiant= require('./etudiant')
const ClassSchema = new Schema({
    name: { type: String, required: true },
    etudiants: [{ type: Schema.Types.ObjectId, ref: 'Etudiant' }],
    matieres: [{type: Schema.Types.ObjectId, ref: 'Matiere'}]
});
module.exports = mongoose.model('Classe', ClassSchema);
