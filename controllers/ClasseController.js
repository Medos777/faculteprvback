const ClasseService = require('../services/ClasseService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const classes= await ClasseService.findAll();
        res.json(classes);
    },
    async findById(req,res,next){
        try {
            const classe= await ClasseService.findById(req.params.id);
            res.json(classe);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        const classe= await ClasseService.create(req.body);
        res.json(classe);
    },
    async update(req,res){
        const classe=await ClasseService.update(req.params.id,req.body);
        res.json(classe);
    },
    async delete(req ,res){
        const result = await ClasseService.delete(req.params.id);
        res.json(result);
    },
    async findByEtudiant(req,res){
        const {classeId,etudiantId}=req.params;
        try {
            const etudiant= await ClasseService.findByEtudiant(classeId, etudiantId);
            res.json(etudiant);
        }catch (error){
            next(error);
        }
    }
   /* async getEtudiantsByClasse(req, res) {
        const classeId = req.params.classeId;
        const etudiants = await ClasseService.getEtudiantsByClasse(classeId);
        res.json(etudiants);
    }*/

}