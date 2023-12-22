const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    numSentences: {
        type: Number,
        required: true,
    },
    summary: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Summary = mongoose.model('Summary', summarySchema);

module.exports = Summary;
