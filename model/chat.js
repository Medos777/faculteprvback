const mongoose = require('mongoose');
const Etudiant = require('./etudiant');
const Enseignant = require('./Enseignant');
const Admin = require('./Admin');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref:  'Admin', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
    ChatDate: { type: Date, default: Date.now },
    object: { type: String, required: true },
    Chatdetails: { type: String, required: true },
    iv: { type: String, required: true },
    authTag: { type: String, required: true }});

module.exports = mongoose.model('Chat', ChatSchema);
