const MatiereService = require('../services/MatiereService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const matieres= await MatiereService.findAll();
        res.json(matieres);
    },
    async findById(req,res,next){
        try {
            const matiere= await MatiereService.findById(req.params.id);
            res.json(matiere);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const matiere= await MatiereService.create(req.body);
        res.json(matiere);
    },
    async update(req,res){
        const matiere=await MatiereService.update(req.params.id,req.body);
        res.json(matiere);
    },
    async delete(req ,res){
        const result = await MatiereService.delete(req.params.id);
        res.json(result);
    }


}