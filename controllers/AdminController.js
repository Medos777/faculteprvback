const AdminService = require('../services/AdminService');
const e = require("express");
module.exports ={
    async findAll(req,res){
        const admins= await AdminService.findAll();
        res.json(admins);
    },
    async findById(req,res,next){
        try {
            const admin= await AdminService.findById(req.params.id);
            res.json(admin);
        }catch (error){
            next(error);
        }
    },
    async create(req,res){
        try {
            const admin= await AdminService.create(req.body);
            res.json(admin);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req,res){
        const admin=await AdminService.update(req.params.id,req.body);
        res.json(admin);
    },
    async delete(req ,res){
        const result = await AdminService.delete(req.params.id);
        res.json(result);
    }
}