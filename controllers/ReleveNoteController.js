const ReleverService = require('../services/ReleverService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const releveNotes= await ReleverService.findAll();
        res.json(releveNotes);
    },
    async findById(req,res,next){
        try {
            const releveNote= await ReleverService.findById(req.params.id);
            res.json(releveNote);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const releveNote= await ReleverService.create(req.body);
        res.json(releveNote);
    },
    async update(req,res){
        const releveNote=await ReleverService.update(req.params.id,req.body);
        res.json(releveNote);
    },
    async delete(req ,res){
        const result = await ReleverService.delete(req.params.id);
        res.json(result);
    }


}