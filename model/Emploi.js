const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Matiere = require('./Matiere')
const Enseignant = require('./Enseignant')

const AutoIncrement = require('mongoose-sequence')(mongoose);

const EmploiSchema = new Schema({
    jour: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    heureDebut: {
        type: Date,
        required: true,
        min: 0,
        max: 23,
        set: hoursToMinutes,
    },
    HeureFin: {
        type: Date,
        required: true,
        min: 0,
        max: 23,
        set: hoursToMinutes,
    },
    matiere: { type: Schema.Types.ObjectId, ref: 'Matiere',required:true },
    enseignant: { type: Schema.Types.ObjectId, ref: 'Enseignant',required:false },

});
function hoursToMinutes(value) {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
}
module.exports = mongoose.model('Emploi', EmploiSchema);
