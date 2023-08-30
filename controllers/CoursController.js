const CoursService = require('../services/CoursService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const cours= await CoursService.findAll();
        res.json(cours);
    },
    async findById(req,res,next){
        try {
            const cours= await CoursService.findById(req.params.id);
            res.json(cours);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        try {
            const cours= await CoursService.create(req.body);
            res.json(cours);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req,res){
        const cours=await CoursService.update(req.params.id,req.body);
        res.json(cours);
    },
    async delete(req ,res){
        const result = await CoursService.delete(req.params.id);
        res.json(result);
    }
}