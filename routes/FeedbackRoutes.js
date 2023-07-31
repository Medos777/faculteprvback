const express=require('express');
const router= express.Router();
const FeedbackController = require('../controllers/FeedbackController');
router.get('/feedbacks',FeedbackController.findAll);
router.get('/feedbacks/:id',FeedbackController.findById);

router.post('/feedbacks',FeedbackController.create);
router.put('/feedbacks/:id',FeedbackController.update);
router.delete('/feedbacks/:id',FeedbackController.delete);

module.exports = router;