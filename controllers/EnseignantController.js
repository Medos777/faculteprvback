const EnseignantService = require('../services/EnseignantService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const enseignants= await EnseignantService.findAll();
        res.json(enseignants);
    },
    async findById(req,res,next){
        try {
            const enseignant= await EnseignantService.findById(req.params.id);
            res.json(enseignant);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const enseignant= await EnseignantService.create(req.body);
        res.json(enseignant);
    },
    async update(req,res){
        const enseignant=await EnseignantService.update(req.params.id,req.body);
        res.json(enseignant);
    },
    async delete(req ,res){
        const result = await EnseignantService.delete(req.params.id);
        res.json(result);
    }


}