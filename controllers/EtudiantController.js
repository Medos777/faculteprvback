const EtudiantService = require('../services/EtudiantService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const etudiants= await EtudiantService.findAll();
        res.json(etudiants);
    },
    async findById(req,res,next){
        try {
const etudiant= await EtudiantService.findById(req.params.id);
res.json(etudiant);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        try {
            const etudiant= await EtudiantService.createEtudiant(req.body, req.params.classeId);
        res.json(etudiant);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req,res){
        const etudiant=await EtudiantService.update(req.params.id,req.body);
        res.json(etudiant);
    },
    async delete(req ,res){
        const result = await EtudiantService.delete(req.params.id);
        res.json(result);
    },
    async getEtudiantsByClasse(req, res) {
        try {
            const etudiants = await EtudiantService.getEtudiantsByClasse(req.params.classeId);
            res.json(etudiants);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}