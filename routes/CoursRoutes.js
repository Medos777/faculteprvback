const express=require('express');
const router= express.Router();
const CoursController = require('../controllers/CoursController');
router.get('/cours',CoursController.findAll);
router.get('/cours/:id',CoursController.findById);

router.post('/cours',CoursController.create);
router.put('/cours/:id',CoursController.update);
router.delete('/cours/:id',CoursController.delete);

module.exports = router;