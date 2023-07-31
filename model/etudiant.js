const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');

const Classe = require('./Classe');
const EtudiantSchema = new Schema(
    {
            matricule : {type: String, required: false,unique:true},
            nom       :{type: String, required: true },
            email     :{type: String,required:true},
        password     :{type: String,required:true},
        adresse       :{type: String, required: true },
            tel       :{type: String, required: true },
            classe: { type: Schema.Types.ObjectId, ref: 'Classe',required:false },
            role:{type: String,required:false,default:"etudiant"}



    });
EtudiantSchema.pre('save', async function(next) {
    if (!this.matricule) {
        const randomNumber = Math.floor(Math.random() * 6);
        const codeString = "Etudiant"+this.nom +this.classe +  randomNumber;
        const code = codeString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        this.matricule = code;
    }
    next();
});
EtudiantSchema.pre('save', async function(next) {
    const etudiant = this;
    if (etudiant.isModified('password')) {
        etudiant.password = await bcrypt.hash(etudiant.password, 10);
    }
    next();
});
module.exports = mongoose.model('Etudiant', EtudiantSchema);
