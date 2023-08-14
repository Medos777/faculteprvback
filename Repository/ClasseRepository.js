const Classe = require('../model/Classe');
module.exports={
    async findAll(){
        try {
            const classes = await Classe.find().populate('etudiants', 'nom');
            return classes.map((classe) => {
                const etudiantNames = classe.etudiants.map((etudiant) => etudiant.nom);
                return { ...classe.toObject(), etudiants: etudiantNames };
            });
        } catch (error) {
            console.error(error);
        }
    },
    async findById(id){
        return await Classe.findById(id);
    },
    async create(data){
        const  classe = new Classe(data);
        return await classe.save();
    },
    async update (id, data){
        return await Classe.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Classe.findByIdAndRemove(id);
    },
    async finByEtudiant(classId,EtudiantId){
        try {
            const classe = await Classe.findById(classId)
                .populate('etudiants')
                .exec();
            console.log(classe);

            const etudiant = classe.etudiants.find((etudiant) => etudiant._id.equals(etudiantId));

            return etudiant;
        } catch (error) {
            console.error(error);
        }
    },
    /*async getEtudiantsByClasse(classeId){
        try {
            console.log(classeId);
            const classe = await Classe.findById(classeId).populate('etudiants');
            console.log(classe);

            return classe.etudiants;
        } catch (error) {
            console.error(error);
        }
    }*/
}