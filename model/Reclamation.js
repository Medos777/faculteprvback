const mongoose = require('mongoose');
const admin = require('./Admin');
const Schema = mongoose.Schema;

const ReclamationSchema = new Schema({
    admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
    ReclamationText: { type: String, required: true },
    ReclamationDate: { type: Date, default: Date.now },
    iv: { type: String, required: true },
    authTag: { type: String, required: true }

});

module.exports = mongoose.model('Reclamation', ReclamationSchema);