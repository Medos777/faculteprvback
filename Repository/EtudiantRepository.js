const Etudiant = require('../model/etudiant');
const Classe = require('../model/Classe');

module.exports = {
    async findAll() {
        try {
            return await Etudiant.find().populate('classe', 'name');
        } catch (error) {
            console.error(error);
        }
    },
    async findById(id){
        return await Etudiant.findById(id);

    },
    /*async create(data){
        const  etudiant = new Etudiant(data);
        return await etudiant.save();
    },*/
    async update (id, data){
        return await Etudiant.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Etudiant.findByIdAndRemove(id);
    },
    async getEtudiantsByClasse(classeId) {
        try {
            const etudiants = await Etudiant.find({ classe: classeId });
            return etudiants;
        } catch (error) {
            console.error(error);
        }
    },
    async createEtudiant(etudiantData, classeId) {
        try {
            const etudiant = new Etudiant(etudiantData);
            if (classeId) {
                const classe = await Classe.findById(classeId);
                if (!classe) {
                    throw new Error(`Classe with ID ${classeId} not found`);
                }
                etudiant.classe = classe._id;
                classe.etudiants.push(etudiant._id);
                await classe.save();
            }
            await etudiant.save();

            // Fetch the populated etudiant object
            const populatedEtudiant = await Etudiant.findById(etudiant._id).populate('classe');

            return populatedEtudiant;
        } catch (error) {
            console.error(error);
        }
    }


}