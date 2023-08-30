const Cours = require('../model/Cours');

module.exports = {
    async findAll() {
        try {
            return await Cours.find().populate('matiere', 'nom').populate('enseignant', 'nom');
        } catch (error) {
            console.error(error);
        }
    },
    async findById(id){
        return await Cours.findById(id);

    },

    async update (id, data){
        return await Cours.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Cours.findByIdAndRemove(id);
    },

    async createCours(CoursData) {
        try {
            const cours = new Cours(CoursData);
            await cours.save();
        } catch (error) {
            console.error(error);
        }
    }


}