var express = require('express');
const bodyParser = require('body-parser');
var etudiantRoutes = require('./routes/EtudiantRoutes');
var classeRoutes = require('./routes/ClasseRoutes');
var matiereRoutes = require('./routes/MatiereRoutes');
var enseignantRoutes = require('./routes/EnseignantRoutes');
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
mongoose.
mongoose.connect('mongodb+srv://amine:amine123@faculteprivee.e46qjd9.mongodb.net/?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const  db = mongoose.connection;
db.on('error',console.error.bind(console,'erreur de connection  a mongodb'));
db.once('open',() => {
    console.log('connecte a mongodb');
});
app.use('/api',etudiantRoutes);
app.use('/api',classeRoutes);
app.use('/api',enseignantRoutes);
app.use('/api',matiereRoutes);
app.use((err,req,res,next) =>{
    console.error(err);
    res.status(500).json({
        error:'Internal server Error'
    });
});

app.listen(3001,()=> {
    console.log('serveur en ecoute sur le port 3001');
});

