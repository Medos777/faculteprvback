const EmploiRepository =require('../Repository/EmploiRepository');
module.exports = {
    async findAll() {
        return await EmploiRepository.findAll();
    },
    async findById(id) {
        return await EmploiRepository.findById(id);

    },
    async create(data) {
        return await EmploiRepository.create(data);
    },
    async update(id, data) {
        return await EmploiRepository.update(id, data);
    },
    async delete(id) {
        return await EmploiRepository.delete(id);
    }
}