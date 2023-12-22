const Summary = require('../model/Summary');
const summarizer = require('node-summarizer').summarizer;

module.exports = {
    async findAll() {
        return await Summary.find();
    },

    async findById(id) {
        return await Summary.findById(id);
    },

    async create(SummaryData) {
        const { text, numSentences } = SummaryData;

        // Utilisation de `node-summarizer` pour générer un résumé
        const summary = summarizer(text, numSentences);

        // Enregistrement dans la base de données
        const createdSummary = await Summary.create({
            text: text,
            numSentences: numSentences,
            summary: summary,
        });

        return createdSummary;
    },

    async update(id, data) {
        return await Summary.findByIdAndUpdate(id, data, { new: true });
    },

    async delete(id) {
        return await Summary.findByIdAndRemove(id);
    },
};
