const summaryService = require('../services/summaryService'); // Assurez-vous que le chemin est correct

// Créez le contrôleur
module.exports = {
    async getAllSummaries(req, res) {
        try {
            const summaries = await summaryService.getAllSummaries();
            res.status(200).json(summaries);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erreur lors de la récupération des résumés.'});
        }
    },

    async getSummaryById(req, res) {
        const {id} = req.params;
        try {
            const summary = await summaryService.getSummaryById(id);
            if (summary) {
                res.status(200).json(summary);
            } else {
                res.status(404).json({error: 'Résumé non trouvé.'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erreur lors de la récupération du résumé.'});
        }
    },

    async createSummary(req, res) {
        const summaryData = req.body;
        try {
            const createdSummary = await summaryService.createSummary(summaryData);
            res.status(201).json(createdSummary);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erreur lors de la création du résumé.'});
        }
    },

    async updateSummary(req, res) {
        const {id} = req.params;
        const newData = req.body;
        try {
            const updatedSummary = await summaryService.updateSummary(id, newData);
            if (updatedSummary) {
                res.status(200).json(updatedSummary);
            } else {
                res.status(404).json({error: 'Résumé non trouvé.'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erreur lors de la mise à jour du résumé.'});
        }
    },

    async deleteSummary(req, res) {
        const {id} = req.params;
        try {
            const deletedSummary = await summaryService.deleteSummary(id);
            if (deletedSummary) {
                res.status(200).json({message: 'Résumé supprimé avec succès.'});
            } else {
                res.status(404).json({error: 'Résumé non trouvé.'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erreur lors de la suppression du résumé.'});
        }
    }
}

