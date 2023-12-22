const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.get('/summaries', summaryController.getAllSummaries);
router.get('/summaries/:id', summaryController.getSummaryById);
router.post('/summaries', summaryController.createSummary);
router.put('/summaries/:id', summaryController.updateSummary);
router.delete('/summaries/:id', summaryController.deleteSummary);

module.exports = router;
