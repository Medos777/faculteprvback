const Facture = require("../model/Facture");

module.exports = {
    async findAll(){
        return await Facture.find();

    },
    async findById(id){
        return await Facture.findById(id);

    },


    async update (id, data){
        return await Facture.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Facture.findByIdAndRemove(id);
    },

    async create(data) {
        const etudiantId = data.etudiant.trim();
        const facture = new Facture({ ...data, etudiant: etudiantId });
        return await facture.save();
    },
    async getFactureByEtudiant(EtudiantId){
        try {
            const factures = await Facture.find({ etudiant: EtudiantId });
            return factures;
        } catch (error) {
            console.error(error);
        }
    }



}