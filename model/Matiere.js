const mongoose = require('mongoose');
const Enseignant = require('./Enseignant');
const Classe = require('./Classe');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const MatiereSchema = new Schema({
    code: {
        type: Number,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    enseignants: [{
        type: Schema.Types.ObjectId,
        ref: 'Enseignant'
    }],
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Classe'
    }]
});
MatiereSchema.plugin(AutoIncrement, {inc_field: 'code'});

module.exports = mongoose.model('Matiere', MatiereSchema);
