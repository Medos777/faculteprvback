const express=require('express');
const router= express.Router();
const EmploiController = require('../controllers/EmploiController');
router.get('/emplois',EmploiController.findAll);
router.get('/enseignants/:id',EmploiController.findById);

router.post('/emplois',EmploiController.create);
router.put('/emplois/:id',EmploiController.update);
router.delete('/emplois/:id',EmploiController.delete);

module.exports = router;