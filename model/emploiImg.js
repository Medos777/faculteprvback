/*
const mongoose = require('mongoose');
const { execSync } = require('child_process');
const fs = require('fs');

const Schema = mongoose.Schema;
const Matiere = require('./Matiere');
const Enseignant = require('./Enseignant');

const EmploiSchema = new Schema({
    jour: {
        type: String,
        required: true,
        enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
    },
    heureDebut: {
        type: Number,
        required: true,
        min: 0,
        max: 23,
        //set: hoursToMinutes,
    },
    heureFin: {
        type: Number,
        required: true,
        min: 0,
        max: 23,
        // set: hoursToMinutes,
    },
    matiere: { type: Schema.Types.ObjectId, ref: 'Matiere', required: true },
    enseignant: { type: Schema.Types.ObjectId, ref: 'Enseignant', required: false },
});

// Generate the Mermaid code for the timetable
EmploiSchema.statics.generateMermaidCode = async function () {
    const emploiData = await this.find().populate('matiere enseignant');

    let mermaidCode = '';

    emploiData.forEach(emploi => {
        const matiere = emploi.matiere.name;
        const enseignant = emploi.enseignant.name;
        const timeSlot = emploi.timeSlot;

        const codeSnippet = `${matiere} - ${enseignant} - ${timeSlot}\n`;
        mermaidCode += codeSnippet;
    });

    return mermaidCode;
};

// Generate the timetable image
EmploiSchema.statics.generateTimetableImage = async function () {
    const mermaidCode = await this.generateMermaidCode();
    const mermaidFilePath = 'timetable.mmd'; // Path to the Mermaid code file
    const imageFilePath = 'timetable.svg'; // Path to the generated image file

    if (!mermaidCode || typeof mermaidCode !== 'string') {
        console.error('Invalid mermaidCode. Unable to generate the timetable image.');
        return;
    }

    // Save the Mermaid code to a file
    fs.writeFileSync(mermaidFilePath, mermaidCode);

    // Generate the SVG image using the Mermaid CLI
    execSync(`npx mmdc -i ${mermaidFilePath} -o ${imageFilePath}`);

    // Check if the image file exists
    try {
        fs.accessSync(imageFilePath, fs.constants.F_OK);
    } catch (err) {
        console.error('The timetable image file does not exist.');
        return;
    }

    // Get the absolute path to the image file
    const absoluteImagePath = fs.realpathSync(imageFilePath);

    // Display the path to the image file
    console.log('Timetable image file path:', absoluteImagePath);

    return absoluteImagePath;
};

module.exports = mongoose.model('Emploi', EmploiSchema);*/
