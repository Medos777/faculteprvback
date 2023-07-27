const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const AutoIncrement = require('mongoose-sequence')(mongoose);

const Classe = require('./Classe')
const AdminSchema = new Schema(
    {
        matricule : {type: String, required: false,unique:true},
        nom       :{type: String, required: true },
        email     :{type: String,required:true},
        password     :{type: String,required:true},
        adresse       :{type: String, required: true },
        tel       :{type: String, required: true },
            role:{type: String,required:false,default:"admin"}



    });
AdminSchema.pre('save', async function(next) {
        // Only generate a new matricule if one doesn't already exist
        if (!this.matricule) {
                const randomNumber = Math.floor(Math.random() * 6);
                const matriculeString = "Admin"+this.nom+randomNumber;
                const matricule = matriculeString.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
                this.matricule = matricule;
        }
        next();
});
module.exports = mongoose.model('Admin', AdminSchema);
