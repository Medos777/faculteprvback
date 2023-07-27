const Matiere = require('../model/Matiere');

module.exports={
    async findAll(){
        return await Matiere.find();
    },
    async findById(id){
        return await Matiere.findById(id);
    },
    async create(data){
        const  catiere = new Matiere(data);
        return await Matiere.save();
    },
    async update (id, data){
        return await Matiere.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Matiere.findByIdAndRemove(id);
    }
}