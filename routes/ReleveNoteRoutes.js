const express=require('express');
const router= express.Router();
const ReleveNoteController = require('../controllers/ReleveNoteController');
router.get('/releveNotes',ReleveNoteController.findAll);
router.get('/releveNotes/:id',ReleveNoteController.findById);

router.post('/releveNotes',ReleveNoteController.create);
router.put('/releveNotes/:id',ReleveNoteController.update);
router.delete('/releveNotes/:id',ReleveNoteController.delete);

module.exports = router;