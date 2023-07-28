const EmploiService = require('../services/EmploiService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const emplois= await EmploiService.findAll();
        res.json(emplois);
    },
    async findById(req,res,next){
        try {
            const emploi= await EmploiService.findById(req.params.id);
            res.json(emploi);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const emploi= await EmploiService.create(req.body);
        res.json(emploi);
    },
    async update(req,res){
        const emploi=await EmploiService.update(req.params.id,req.body);
        res.json(emploi);
    },
    async delete(req ,res){
        const result = await EmploiService.delete(req.params.id);
        res.json(result);
    }


}