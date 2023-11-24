const ChatService = require('../services/ChatService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const chat= await ChatService.findAll();
        res.json(chat);
    },
    async findById(req,res,next){
        try {
            const chat= await ChatService.findById(req.params.id);
            res.json(chat);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        try {
            const chat= await ChatService.create(req.body);
            res.json(chat);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async findByEmail(req, res) {
        try {
            const chats = await ChatService.findByEmail(req.body.senderEmail, req.body.receiverEmail);
            res.json(chats);
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while fetching chats.');
        }
    },
    async delete(req ,res){
        const result = await CoursService.delete(req.params.id);
        res.json(result);
    }
}