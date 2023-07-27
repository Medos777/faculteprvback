const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Classe = require('./Classe')
const EtudiantSchema = new Schema(
    {
            matricule : {type: Number, required: true,unique:true},
            nom       :{type: String, required: true },
            email     :{type: String,required:true},
            adresse       :{type: String, required: true },
            tel       :{type: String, required: true },
            classe: { type: Schema.Types.ObjectId, ref: 'Classe',required:false }



    });
EtudiantSchema.plugin(AutoIncrement, {inc_field: 'matricule'});

module.exports = mongoose.model('Etudiant', EtudiantSchema);
