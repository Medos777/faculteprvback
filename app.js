const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const etudiantRoutes = require('./routes/EtudiantRoutes');
const classeRoutes = require('./routes/ClasseRoutes');
const matiereRoutes = require('./routes/MatiereRoutes');
const enseignantRoutes = require('./routes/EnseignantRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const authRoutes = require('./routes/AuthRoutes');
const facturesRoutes = require('./routes/FactureRoutes');
const emploiRoutes = require('./routes/EmploiRoutes');
const releveNoteRoutes = require('./routes/ReleveNoteRoutes');
const coursRoutes = require('./routes/CoursRoutes');
const chatRoutes = require('./routes/ChatRoutes');
const feedbackRoutes = require('./routes/FeedbackRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const reclamationRoutes = require('./routes/ReclamationRoutes');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://amine:amine123@faculteprivee.e46qjd9.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'erreur de connection a mongodb'));
db.once('open', () => {
    console.log('connecte a mongodb');
});

app.use('/api', authRoutes);
app.use('/api', etudiantRoutes);
app.use('/api', classeRoutes);
app.use('/api', enseignantRoutes);
app.use('/api', matiereRoutes);
app.use('/api', adminRoutes);
app.use('/api', facturesRoutes);
app.use('/api', emploiRoutes);
app.use('/api', releveNoteRoutes);
app.use('/api', feedbackRoutes);
app.use('/api', coursRoutes);
app.use('/api', loginRoutes);
app.use('/api', reclamationRoutes);
app.use('/api', chatRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: 'Internal server Error',
    });
});

app.listen(3001, () => {
    console.log('serveur en ecoute sur le port 3001');
});