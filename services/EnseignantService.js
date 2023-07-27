const EnseignantRepository =require('../Repository/EnseignantRepository');
module.exports = {
    async findAll() {
        return await EnseignantRepository.findAll();
    },
    async findById(id) {
        return await EnseignantRepository.findById(id);

    },
    async create(data) {
        return await EnseignantRepository.create(data);
    },
    async update(id, data) {
        return await EnseignantRepository.update(id, data);
    },
    async delete(id) {
        return await EnseignantRepository.delete(id);
    }
}