const AdminRepository =require('../Repository/AdminRepository');
module.exports = {
    async findAll() {
        return await AdminRepository.findAll();
    },
    async findById(id){
        return   await AdminRepository.findById(id);

    },
    async create(data){
        return await AdminRepository.create(data);
    },
    async update(id, data){
        return await AdminRepository.update(id, data);
    },
    async delete(id){
        return await  AdminRepository.delete(id);
    }
}