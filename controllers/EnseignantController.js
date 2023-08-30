const EnseignantService = require('../services/EnseignantService');
const multer = require('multer');
const AdminService = require("../services/AdminService");

// Configure multer storage
const storage = multer.diskStorage({
    destination: 'uploads/', // Set the destination folder to save the uploaded files
    filename: (req, file, cb) => {
        // Generate a unique filename by appending a timestamp to the original filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

// Create an instance of the multer middleware with the configured storage
const upload = multer({ storage });

module.exports = {
    async findAll(req, res) {
        try {
            const enseignants = await EnseignantService.findAll();
            res.json(enseignants);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async findById(req, res) {
        try {
            const enseignant = await EnseignantService.findById(req.params.id);
            res.json(enseignant);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async create(req,res){
        try {
            const enseignant= await EnseignantService.create(req.body);
            res.json(enseignant);}catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            const enseignant = await EnseignantService.update(req.params.id, req.body);
            res.json(enseignant);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async delete(req, res) {
        try {
            const result = await EnseignantService.delete(req.params.id);
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};