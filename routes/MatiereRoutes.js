const express=require('express');
const router= express.Router();
const MatiereController = require('../controllers/MatiereController');
router.get('/Matieres',MatiereController.findAll);
router.get('/Matieres/:id',MatiereController.findById);

router.post('/Matieres',MatiereController.create);
router.put('/Matieres/:id',MatiereController.update);
router.delete('/Matieres/:id',MatiereController.delete);

module.exports = router;