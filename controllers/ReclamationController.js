const  ReclamationService = require('../services/ReclamationService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const feedbacks= await ReclamationService.findAll();
        res.json(feedbacks);
    },
    async findById(req, res, next) {
        try {
            const reclamationId = req.params.id;
            const userId = req.user.id; // Assuming you have authentication middleware

            const feedback = await ReclamationService.findById(reclamationId, userId);

            if (!feedback) {
                return res.status(404).json({ message: 'Reclamation not found or unauthorized access' });
            }

            res.json(feedback);
        } catch (error) {
            next(error);
        }
    },

    async create(req,res){
        const feedback= await ReclamationService.create(req.body);
        res.json(feedback);
    },
    async update(req,res){
        const feedback=await ReclamationService.update(req.params.id,req.body);
        res.json(feedback);
    },
    async delete(req ,res){
        const result = await ReclamationService.delete(req.params.id);
        res.json(result);
    }


}