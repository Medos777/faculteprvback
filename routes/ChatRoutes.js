const express=require('express');
const router= express.Router();
const ChatController = require('../controllers/ChatController');
router.get('/chats',ChatController.findAll);
router.get('/chts/:id',ChatController.findById);

router.post('/chats',ChatController.create);
router.get('/chats/findByEmail', ChatController.findByEmail);
router.delete('/chats/:id',ChatController.delete);

module.exports = router;