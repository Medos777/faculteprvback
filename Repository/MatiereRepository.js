const Matiere = require('../model/Matiere');
const Enseignant = require('../model/Enseignant');

module.exports={
    async findAll(){
        return await Matiere.find();
    },
    async findById(id){
        return await Matiere.findById(id);
    },
    async create(matiereData) {
        const matiere = new Matiere(matiereData);
        const createdMatiere = await matiere.save();

        const enseignants = await Enseignant.find({ _id: { $in: createdMatiere.enseignants } });
        enseignants.forEach(async (enseignant) => {
            enseignant.matieres.push(createdMatiere._id);
            await enseignant.save();
        });

        return createdMatiere;
    },
    async update (id, data){
        return await Matiere.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Matiere.findByIdAndRemove(id);
    }

}