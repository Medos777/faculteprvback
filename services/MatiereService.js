const MatiereRepository =require('../Repository/MatiereRepository');
module.exports = {
    async findAll() {
        return await MatiereRepository.findAll();
    },
    async findById(id) {
        return await MatiereRepository.findById(id);

    },
    async create(data) {
        return await MatiereRepository.create(data);
    },
    async update(id, data) {
        return await MatiereRepository.update(id, data);
    },
    async delete(id) {
        return await MatiereRepository.delete(id);
    }
}