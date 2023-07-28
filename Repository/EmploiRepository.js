const Emploi = require('../model/Emploi');
module.exports={
    async findAll(){
        return await Emploi.find();
    },
    async findById(id){
        return await Emploi.findById(id);
    },
    async create(data){
        const emploi = new Emploi(data);
        return await emploi.save();
    },
    async update (id, data){
        return await Emploi.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Emploi.findByIdAndRemove(id);
    }
}