const ReleveNoteRepository =require('../Repository/ReleveNoteRepository');
module.exports = {
    async findAll() {
        return await ReleveNoteRepository.findAll();
    },
    async findById(id) {
        return await ReleveNoteRepository.findById(id);

    },
    async create(data) {
        return await ReleveNoteRepository.create(data);
    },
    async update(id, data) {
        return await ReleveNoteRepository.update(id, data);
    },
    async delete(id) {
        return await ReleveNoteRepository.delete(id);
    }
}