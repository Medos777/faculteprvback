const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Matiere = require('./Matiere');
const Enseignant = require('./Enseignant');

const CoursSchema = new Schema({
    libelle: { type: String, required: false },
    matiere: { type: Schema.Types.ObjectId, ref: 'Matiere', required: false },
    enseignant: { type: Schema.Types.ObjectId, ref: 'Enseignant', required: false }
});

CoursSchema.pre('save', async function(next) {
    try {
        const matiere = await Matiere.findById(this.matiere);
        if (matiere) {
            this.libelle = matiere.nom;
        }
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Cours', CoursSchema);