const express=require('express');
const router= express.Router();
const FactureController = require('../controllers/FactureController');
router.get('/factures',FactureController.findAll);
router.get('/factures/:id',FactureController.findById);
router.get('/factures/etudiant/:EtudiantId',FactureController.getFactureByEtudiant);

router.post('/factures',FactureController.create);
router.put('/factures/:id',FactureController.update);
router.delete('/factures/:id',FactureController.delete);
module.exports = router;