const ReleveNote = require('../model/ReleveNote');
module.exports={
    async findAll(){
        return await ReleveNote.find();
    },
    async findById(id){
        return await ReleveNote.findById(id);
    },
    async create(data){
        const  releveNote = new ReleveNote(data);
        return await releveNote.save();
    },
    async update (id, data){
        return await ReleveNote.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await ReleveNote.findByIdAndRemove(id);
    }
}