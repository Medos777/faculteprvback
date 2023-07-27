const mongoose = require('mongoose');
const Enseignant = require('./Enseignant');
const Classe = require('./Classe');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const MatiereSchema = new Schema({
    code: {
        type: String,
        required: false,
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
MatiereSchema.pre('save', async function(next) {
    if (!this.code) {
        const randomNumber = Math.floor(Math.random() * 6);
        const codeString = this.nom+"00" + randomNumber;
        const code = codeString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        this.code = code;
    }
    next();
});
module.exports = mongoose.model('Matiere', MatiereSchema);
