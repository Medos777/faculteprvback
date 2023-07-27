const express=require('express');
const router= express.Router();
const EtudiantController = require('../controllers/EtudiantController');
router.get('/etudiants',EtudiantController.findAll);
router.get('/etudiants/:id',EtudiantController.findById);
router.get('/etudiants/classe/:classeId',EtudiantController.getEtudiantsByClasse);

router.post('/etudiants/:classeId',EtudiantController.create);
router.put('/etudiants/:id',EtudiantController.update);
router.delete('/etudiants/:id',EtudiantController.delete);
module.exports = router;