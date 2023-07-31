const mongoose = require('mongoose');
const Etudiant = require('./Classe');
const Matiere = require('./Matiere');
const Schema = mongoose.Schema;

const ReleveNoteSchema = new Schema({
    EtudiantId: { type: Schema.Types.ObjectId, ref: 'Etudiant', required: true },
    classe: [
        {
            matiere: { type: Schema.Types.ObjectId, ref: 'Matiere', required: true },
            note: { type: Number, required: true, min: 0, max: 100 },
            anneAcademique: { type: Number, required: true, min: 1900, max: 2100 },
        },
    ],
    semester: { type: Number, required: true, min: 1, max: 8 },
    moyenne: { type: Number, required: false },

});
ReleveNoteSchema.pre('save', function (next) {
    const sum = this.classe.reduce((total, course) => total + course.note, 0);
    const count = this.classe.length;
    this.moyenne = sum / count;
    next();
});

module.exports = mongoose.model('ReleveNote', ReleveNoteSchema);