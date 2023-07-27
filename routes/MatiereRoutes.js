const express=require('express');
const router= express.Router();
const MatiereController = require('../controllers/MatiereController');
router.get('/matieres',MatiereController.findAll);
router.get('/matieres/:id',MatiereController.findById);

router.post('/matieres',MatiereController.create);
router.put('/matieres/:id',MatiereController.update);
router.delete('/matieres/:id',MatiereController.delete);

module.exports = router;