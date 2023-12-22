
const summaryRepository = require('../Repository/SummaryRepository');

module.exports = {
    async getAllSummaries() {
        return await summaryRepository.findAll();
    },

    async getSummaryById(id) {
        return await summaryRepository.findById(id);
    },

    async createSummary(summaryData) {
        return await summaryRepository.create(summaryData);
    },

    async updateSummary(id, newData) {
        return await summaryRepository.update(id, newData);
    },

    async deleteSummary(id) {
        return await summaryRepository.delete(id);
    }
}


