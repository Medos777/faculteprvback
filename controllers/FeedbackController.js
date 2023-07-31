const  FeedbackController = require('../services/FeedbackService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const feedbacks= await FeedbackController.findAll();
        res.json(feedbacks);
    },
    async findById(req,res,next){
        try {
            const feedback= await FeedbackController.findById(req.params.id);
            res.json(feedback);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const feedback= await FeedbackController.create(req.body);
        res.json(feedback);
    },
    async update(req,res){
        const feedback=await FeedbackController.update(req.params.id,req.body);
        res.json(feedback);
    },
    async delete(req ,res){
        const result = await FeedbackController.delete(req.params.id);
        res.json(result);
    }


}