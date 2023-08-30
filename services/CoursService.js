const CoursRepository =require('../Repository/CoursRepository');
module.exports = {
    async findAll() {
        return await CoursRepository.findAll();
    },
    async findById(id){
        return   await CoursRepository.findById(id);

    },
    async create(data){
        return await CoursRepository.createCours(data);
    },
    async update(id, data){
        return await CoursRepository.update(id, data);
    },
    async delete(id){
        return await  CoursRepository.delete(id);
    }
}