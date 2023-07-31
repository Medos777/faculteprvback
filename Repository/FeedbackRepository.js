const Feedback= require('../model/Feedback');
module.exports={
    async findAll(){
        return await Feedback.find();
    },
    async findById(id){
        return await Feedback.findById(id);
    },
    async create(data){
        const feedback=new Feedback(data);
        return await feedback.save();
    },
    async update(id, data){
        return await Feedback.findByIdAndUpdate(id, data, {new : true});
    },
    async delete(id){
        return await Feedback.findByIdAndRemove(id);
    }
}