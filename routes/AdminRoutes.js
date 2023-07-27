const express=require('express');
const router= express.Router();
const AdminController = require('../controllers/AdminController');
router.get('/admins',AdminController.findAll);
router.get('/admins/:id',AdminController.findById);

router.post('/admins',AdminController.create);
router.put('/admins/:id',AdminController.update);
router.delete('/admins/:id',AdminController.delete);

module.exports = router;