const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Matiere = require('./Matiere');
const Enseignant = require('./Enseignant');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmploiSchema = new Schema({
    jour: {
        type: String,
        required: true,
        enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    },
    journee: [
        {
            heureDebut: { type: Number,required:true, min: 0, max: 23 },
            heureFin: { type: Number,required:true,min: 0, max: 23 },
            matiere: { type: Schema.Types.ObjectId, ref: 'Matiere', required: true },
            enseignant: { type: Schema.Types.ObjectId, ref: 'Enseignant', required: false }
        }
    ]
});

/*EmploiSchema.plugin(AutoIncrement, {
    field: 'id',
    start: 1,
    increment: 1
});*/

module.exports = mongoose.model('Emploi', EmploiSchema);
