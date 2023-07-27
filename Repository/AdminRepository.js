const Admin = require('../model/Admin');

module.exports = {
    async findAll(){
        return await Admin.find();

    },
    async findById(id){
        return await Admin.findById(id);

    },

    async update (id, data){
        return await Admin.findByIdAndUpdate(id, data, {new : true});

    },
    async delete(id){
        return await Admin.findByIdAndRemove(id);
    },

    async create(data){

        const  admin = new Admin(data);
        return await admin.save();
    }


}