const express=require('express');
const router= express.Router();
const ClasseController = require('../controllers/ClasseController');
router.get('/classes',ClasseController.findAll);
router.get('/classes/:id',ClasseController.findById);
//router.get('/classes/classe/:classeId',ClasseController.findByEtudiant);

router.post('/classes',ClasseController.create);
router.put('/classes/:id',ClasseController.update);
router.delete('/classes/:id',ClasseController.delete);
module.exports = router;