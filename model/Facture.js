const mongoose = require('mongoose');
const Etudiant= require('./etudiant')
const Schema = mongoose.Schema;

const FactureSchema = new mongoose.Schema({
    numero: {
        type: String,
        required: false,
        unique: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    etudiant: { type: Schema.Types.ObjectId, ref: 'Etudiant',required:false },
    filiere: {
        type: String,
        required: true
    },
    niveau: {
        type: Number,
        required: true
    },
    fraisInscription: {
        type: Number,
        required: true
    },
    fraisScolarite: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: false
    }
});
FactureSchema.pre('save', async function(next) {
    if (!this.numero) {
        const randomNumber = Math.floor(Math.random() * 6);
        const numeroString = this.date +this.etudiant +this.niveau + randomNumber;
        const numero = numeroString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        this.numero = numero;
    }
    this.total = this.fraisScolarite + this.fraisInscription;
    next();
});

module.exports = mongoose.model('Facture', FactureSchema);