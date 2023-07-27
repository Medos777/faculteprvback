const express=require('express');
const router= express.Router();
const EnseignantController = require('../controllers/EnseignantController');
router.get('/enseignants',EnseignantController.findAll);
router.get('/enseignants/:id',EnseignantController.findById);

router.post('/enseignants',EnseignantController.create);
router.put('/enseignants/:id',EnseignantController.update);
router.delete('/enseignants/:id',EnseignantController.delete);

module.exports = router;