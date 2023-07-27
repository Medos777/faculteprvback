const FactureService = require('../services/FactureService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const factures= await FactureService.findAll();
        res.json(factures);
    },
    async findById(req,res,next){
        try {
            const facture= await FactureService.findById(req.params.id);
            res.json(facture);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        try {
            const facture= await FactureService.create(req.body);
            res.json(facture);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req,res){
        const facture=await FactureService.update(req.params.id,req.body);
        res.json(facture);
    },
    async delete(req ,res){
        const result = await FactureService.delete(req.params.id);
        res.json(result);
    },
    async getFactureByEtudiant(req, res) {
        try {
            const factures = await FactureService.getFactureByEtudiant(req.params.EtudiantId);
            res.json(factures);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}