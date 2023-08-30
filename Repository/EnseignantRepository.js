const Enseignant = require('../model/Enseignant');

module.exports = {
        async findAll() {
            try {
                return await Enseignant.find();
            } catch (error) {
                throw new Error("Error while fetching all Enseignants.");
            }
        },
    async findById(id) {
        try {
            return await Enseignant.findById(id);
        } catch (error) {
            throw new Error(`Error while fetching Enseignant with ID: ${id}`);
        }
    },
    async create(data) {
        try {
            const enseignant = new Enseignant(data);
            return await enseignant.save();
        } catch (error) {
            throw new Error("Error while creating Enseignant.");
        }
    },
    async update(id, data) {
        try {
            return await Enseignant.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(`Error while updating Enseignant with ID: ${id}`);
        }
    },
    async delete(id) {
        try {
            return await Enseignant.findByIdAndRemove(id);
        } catch (error) {
            throw new Error(`Error while deleting Enseignant with ID: ${id}`);
        }
    },
};