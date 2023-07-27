const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const EnseignantSchema = new Schema(
    {
        matricule : {type: String, required: false,unique:true},
        nom       :{type: String, required: true },
        email     :{type: String,required:true},
        password     :{type: String,required:true},
        adresse       :{type: String, required: true },
        tel       :{type: String, required: true },
            matieres: [{
                    type: Schema.Types.ObjectId,
                    ref: 'Matiere'
            }],
        role:{type: String,required:false,default:"enseignant"}




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
module.exports = mongoose.model('Enseignant', EnseignantSchema);
