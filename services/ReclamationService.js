const ReclamationRepository= require('../Repository/ReclamationRepository');
module.exports={
    async findAll() {
        return await ReclamationRepository.findAll();
    },
    async findById(id) {
        return await ReclamationRepository.findByIdForUser(id);

    },
    async create(data) {
        return await ReclamationRepository.create(data);
    },
    async update(id, data) {
        return await ReclamationRepository.update(id, data);
    },
    async delete(id) {
        return await ReclamationRepository.delete(id);
    }
}