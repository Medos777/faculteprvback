const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Cours = require('./Cours')
const EnseignantSchema = new Schema(
    {
        matricule : {type: String, required: false,unique:true},
        nom       :{type: String, required: true },
        email     :{type: String,required:true},
        password     :{type: String,required:true},
        adresse       :{type: String, required: true },
        tel       :{type: String, required: true },
            cours: [{type: Schema.Types.ObjectId, ref: 'Cours'}],
        role:{type: String,required:false,default:"enseignant"},
        photo: { type: Buffer, required: false }





    });

EnseignantSchema.pre('save', async function(next) {
    if (!this.matricule) {
        const randomNumber = Math.floor(Math.random() * 6);
        const codeString = "Enseignant"+this.nom +  randomNumber;
        const code = codeString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        this.matricule = code;
    }
    next();
});
EnseignantSchema.pre('save', async function(next) {
    const enseignant = this;
    if (enseignant.isModified('password')) {
        enseignant.password = await bcrypt.hash(enseignant.password, 10);
    }
    next();
});

module.exports = mongoose.model('Enseignant', EnseignantSchema);
