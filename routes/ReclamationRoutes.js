const express=require('express');
const router= express.Router();
const ReclamationController = require('../controllers/ReclamationController');
router.get('/reclamations',ReclamationController.findAll);
router.get('/reclamations/:id',ReclamationController.findById);

router.post('/reclamations',ReclamationController.create);
router.put('/reclamations/:id',ReclamationController.update);
router.delete('/reclamations/:id',ReclamationController.delete);

module.exports = router;