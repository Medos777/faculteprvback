const Enseignant = require('../model/Enseignant');
module.exports={
    async findAll(){
        return await Enseignant.find();
    },
    async findById(id){
        return await Enseignant.findById(id);
    },
    async create(data){
        const  enseignant = new Enseignant(data);
        return await enseignant.save();
    },
    async update (id, data){
        return await Enseignant.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Enseignant.findByIdAndRemove(id);
    }
}