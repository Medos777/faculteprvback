const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cours = require('./Cours');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmploiSchema = new Schema({
    jour: {
        type: String, required: true,
        enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    },
    seances: [
        {
            heureDebut: { type: Number,required:true, min: 0, max: 23 },
            heureFin: { type: Number,required:true,min: 0, max: 23 },
            cours: { type: Schema.Types.ObjectId, ref: 'Cours', required: true },
        }
    ]
});


module.exports = mongoose.model('Emploi', EmploiSchema);
